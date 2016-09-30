# Angular 2 Bug Reproduce - destroy NgModuleRef / Platform

This project was generated with [angular-cli](https://github.com/angular/angular-cli) version 1.0.0-beta.16.

## Development server
Run `npm install` followed by `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## BUG1
router is not being disposed when destyoing an app (NgModuleRef)

Reproduce Steps:
 1. reload app
 2. wait for angular app to load.
 3. click on button "**destroy app**" (from destruction panel).
 4. click on button "navigate to some non angular route (1) / (2)" (from outter app navigation)

Expected Result:
- router should be disposed after app gets destroyed and stop handle navigation events 

Actual Result
- router is not disposed. it keeps intercepting routing events



## BUG2
modules are not being destroyed when destyoing a platform (PlatformRef)
     
Reproduce Steps:
 1. reload app
 2. wait for angular app to load.
 3. click on button "**destroy platform**" (from destruction panel).
 4. optional - repeat step 2

Expected Result:
- app should be destroyed after platform gets destroyed 

Actual Result
- app is not destroyed. it keeps running as before. (the modules list in platform is empty!)
