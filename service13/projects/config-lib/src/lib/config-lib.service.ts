import { Injectable } from '@angular/core';

export class Configs {
  app: {
    domain: string;
    port: string;
  } | undefined

  constructor(init?: Partial<Configs>) {
    Object.assign(this, init);
  }
}

@Injectable({providedIn: 'root'})
export class ConfigLibService {
  //Redefine later mix environment for build
  private configs: Configs = {
    app: {
      domain: 'remotehost',
      port: 'fake'
    }
  }
  constructor() {
    // this.configs = new Configs(environment);
  }

  read(): Configs {
    return this.configs;
  }

  write(data: Configs): void {
    this.configs = new Configs(data);
  }
}