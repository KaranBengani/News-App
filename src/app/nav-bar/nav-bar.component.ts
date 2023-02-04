import { Component , Output,EventEmitter} from '@angular/core';
import { StoreService } from '../store.service';
import { Router} from '@angular/router';

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
  admin = false;

  constructor(public store: StoreService,private router: Router){}

  navClick(){
    this.newsEvent.emit(true)
  }
  navNews(cat:string){
    this.store.category = cat;
    console.log(this.store.category)
    this.navLinkEvent.emit('news')
    this.router.navigate(['blog'])
  }
  navAbout(){
    this.navLinkEvent.emit('about')
    this.router.navigate(['about'])
  }
  navPhoto(){
    this.navLinkEvent.emit('photo')
    this.router.navigate(['photo'])
  }
  navLog(){
    this.navLinkEvent.emit('log')
    this.router.navigate(['auth'])
  }
  navAdmin(){
    this.navLinkEvent.emit('admin')
    this.router.navigate(['admin'])
  }
  ngOnInit(blog:any){
  this.activeClass = false
    console.log(localStorage.getItem("eweekly_user"));
    if(localStorage.getItem("eweekly_user")!=null){
      
      this.isLoggedIn = true
      this.admin = false;
    }
    if(localStorage.getItem("eweekly_user")=="admin@admin.com"){
      
      this.isLoggedIn = true
      this.admin = true;
    }
    if(localStorage.getItem("eweekly_user")==null){
      this.isLoggedIn = false;
    }
   }
   
  toggleForm(){
    this.activeClass= !this.activeClass
  }

  logout(){
    localStorage.removeItem("eweekly_user");
    this.isLoggedIn = false;
    this.admin=false;
    this.navLinkEvent.emit('news')
    this.router.navigate(['blog'])
    alert("You just logged out");
  }
}
