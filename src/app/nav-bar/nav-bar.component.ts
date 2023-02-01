import { Component , Output,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {
  @Output() newsEvent = new EventEmitter<boolean>();
  @Output() navLinkEvent = new EventEmitter<string>();
  navClick(){
    this.newsEvent.emit(true)
  }
  navNews(){
    this.navLinkEvent.emit('news')
  }
  navAbout(){
    this.navLinkEvent.emit('about')
  }
  navPhoto(){
    this.navLinkEvent.emit('photo')
  }
}
