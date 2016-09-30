import "./polyfills.ts";
import {platformBrowserDynamic} from "@angular/platform-browser-dynamic";
import {enableProdMode, NgModuleRef} from "@angular/core";
import {environment} from "./environments/environment";
import {AppModule} from "./app/";

if (environment.production) {
  enableProdMode();
}

let platform = platformBrowserDynamic();
platform.bootstrapModule(AppModule)
  .then((ngModuleRef: NgModuleRef<AppModule>) => {
    window['debug'] = {
      platform: platform,
      ngModuleRef: ngModuleRef
    };
  });
