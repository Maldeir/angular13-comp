import { Component, OnInit } from '@angular/core';
import {ConfigLibService} from 'config-lib';

@Component({
  selector: 'app-base-comp',
  templateUrl: './base-comp.component.html',
  styleUrls: ['./base-comp.component.scss']
})
export class BaseCompComponent implements OnInit {
  private readonly configs: any = null;
  constructor(configLibService: ConfigLibService) {
    this.configs = configLibService.read();
  }

  ngOnInit(): void {
    console.log('app: header: ', this.configs);
  }

}
