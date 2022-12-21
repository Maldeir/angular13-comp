import { Component, OnInit } from '@angular/core';
import { Device } from '@capacitor/device';
import {ConfigLibService} from 'config-lib';
@Component({
  selector: 'app-header-comp',
  templateUrl: './header-comp.component.html',
  styleUrls: ['./header-comp.component.scss']
})
export class HeaderCompComponent implements OnInit {
  private readonly configs: any = null;

  constructor(private configLibService: ConfigLibService) {
    this.configs = configLibService.read();

    console.log('I am reading config many levels deep:', this.configs);
    this.configLibService.configUpdateEmitter.subscribe((data: any) => {
      console.log('AMAZING HEADER DATA UPDATeD: ', data);
    });
  }

  ngOnInit(): void {
    this.logDeviceInfo();
    this.logBatteryInfo();
  }

  logDeviceInfo = async () => {
    const info = await Device.getInfo();

    console.log(info);
  };

  logBatteryInfo = async () => {
    const info = await Device.getBatteryInfo();

    console.log(info);
  };
}
