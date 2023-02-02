import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
activeClass : boolean 
constructor(){
this.activeClass = false
}
toggleForm(){
this.activeClass= !this.activeClass
}
}
