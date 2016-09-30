import {BrowserModule} from "@angular/platform-browser";
import {NgModule, OnDestroy, Injector} from "@angular/core";
import {FormsModule} from "@angular/forms";
import {HttpModule} from "@angular/http";
import {AppComponent} from "./app.component";
import {BugReproduceRoutingModule} from "./app-routing.module";
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";
import {Router} from "@angular/router";

@NgModule({
  declarations: [
    AppComponent,
    AComponent,
    BComponent
  ],
  imports: [
    BugReproduceRoutingModule,
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
// uncomment to "fix" the router exceptions after app has been destroyed
export class AppModule implements OnDestroy{
  //constructor(private _injector: Injector){}
  ngOnDestroy(): void {
    console.log('%cAppModule destroyed', 'color: yellowgreen;');
    // try{ this._injector.get(Router).dispose(); } catch (e){} finally {}
  }
}
