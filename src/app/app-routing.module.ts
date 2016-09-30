import {NgModule} from "@angular/core";
import {Routes, RouterModule, CanActivate} from "@angular/router";
import {AComponent} from "./a/a.component";
import {BComponent} from "./b/b.component";

// to stop getting
// "EXCEPTION: Uncaught (in promise): Error: Cannot match any routes: 'some-route-1' / 'some-route-2'"
// add this to the routes
// {
//   path: '**',
//   canActivate: NavigationValidator,
//   component: AComponent
// }

class NavigationValidator implements CanActivate {
  canActivate(){
    return true;
  }
}

const routes: Routes = [
  {
    path: 'route-a',
    component: AComponent
  },
  {
    path: 'route-b',
    component: BComponent
  },
  {
    path: '',
    redirectTo: 'route-a',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule],
  providers: []
})
export class BugReproduceRoutingModule { }
