import { Component , Output,EventEmitter} from '@angular/core';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css', '../auth-form/auth-form.component.css']
})
export class NavBarComponent {
  @Output() newsEvent = new EventEmitter<boolean>();
  @Output() navLinkEvent = new EventEmitter<string>();

  activeClass : boolean = false;
  isLoggedIn = false;

  constructor(public store: StoreService){}

  navClick(){
    this.newsEvent.emit(true)
  }
  navNews(cat:string){
    this.store.category = cat;
    this.navLinkEvent.emit('news')
  }
  navAbout(){
    this.navLinkEvent.emit('about')
  }
  navPhoto(){
    this.navLinkEvent.emit('photo')
  }
  navLog(){
    this.navLinkEvent.emit('log')
  }
  ngOnInit(blog:any){
  this.activeClass = false

    if(localStorage.getItem("eweekly_user")!=null){
      
      this.isLoggedIn = false
    }
    else{
      this.isLoggedIn = true;
    }
   }
   
  toggleForm(){
    this.activeClass= !this.activeClass
  }
}
