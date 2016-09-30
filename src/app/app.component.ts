import {Component, OnDestroy} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnDestroy{
  title = 'Angular2 App Works!';
  ngOnDestroy(): void {
    console.log('%cAppComponent destroyed', 'color: yellowgreen;');
  }
}
