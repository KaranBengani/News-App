import { Component, EventEmitter, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'News-App';
  checkView = true

  viewMenu(event:boolean) {
    this.checkView = event
  }
  newsMenu(event:boolean){
    this.checkView = event
  }
}
