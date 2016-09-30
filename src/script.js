/**
 * Created by talsi on 30/09/2016.
 */

function destroyApp(){
  ng2App = window.debug.ngModuleRef;
  ng2App.destroy();
}

function destroyPlatform(){
  platform = window.debug.platform;
  try { platform.destroy(); } catch(e){ console.error(e); }
}

// no exceptions from router when using HTML5 history API after app was destroyed
// nonetheless, router is not being disposed
function navigateTo(route){
  window.location.hash = route;
  // window.history.pushState(null, route, route);
}
