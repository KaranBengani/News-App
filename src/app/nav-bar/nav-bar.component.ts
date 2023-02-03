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
