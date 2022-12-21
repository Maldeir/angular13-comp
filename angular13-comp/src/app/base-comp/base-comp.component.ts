import { Component, OnInit, ViewChild, ViewContainerRef } from '@angular/core';
import { loadRemoteModule } from '@angular-architects/module-federation';
import { ConfigLibService, Configs } from 'config-lib';

@Component({
  selector: 'app-base-comp',
  templateUrl: './base-comp.component.html',
  styleUrls: ['./base-comp.component.scss']
})
export class BaseCompComponent implements OnInit {
  private readonly configs: any;
  @ViewChild('headerRef', {read: ViewContainerRef})
  viewContainer!: ViewContainerRef

  constructor(private configLibService: ConfigLibService) {
    this.configs = configLibService.read();
  }

  ngOnInit(): void {
    this.load();
    console.log('app: header: core', this.configs);

    console.log('this: ', this.configLibService)
    this.configLibService.configUpdateEmitter.subscribe((data: any) => {
      console.log('base component config update', data);
    });
  }

  async load(): Promise<void> {
    const module = await loadRemoteModule({
      type: 'module',
      remoteEntry: 'http://localhost:82/remoteEntry.js',
      exposedModule: './HeaderComponent'
    });

    const ref = this.viewContainer.createComponent(module.HeaderCompComponent);
  }

  update() {
    console.log('I am writing')
    const config = new Configs({app: {domain: 'inside base', port: 'AMAZING'}})
    this.configLibService.write(config);
  }
}
