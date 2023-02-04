import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.css']
})
export class AuthFormComponent {
  name:string="";
  email:string="";
  contact:string="";
  password:string="";
  loginemail:string="";
  loginpassword:string="";
activeClass : boolean 
constructor(public http:HttpClient){
this.activeClass = false
}
signup(){
  let body = {
    "name":this.name,
    "email":this.email,
    "phone":this.contact,
    "password":this.password,
    "preferences":"",
    "status":""
  }
  this.http.post("http://localhost:3000/users/newUser",body).subscribe(res=>{
    console.log(res);
    this.name="";
    this.email="";
    this.contact="";
    this.password="";
    alert("form submitted")
    this.activeClass = false;
  })
}
login(){
  let body = {
    "email":this.loginemail,
    "password":this.loginpassword
  }
  this.http.post("http://localhost:3000/users/login",body).subscribe(res=>{
    console.log(res);
    this.loginemail="";
    this.loginpassword="";
    this.setLocalStorage(res);
    alert("form submitted");
    window.location.reload();
  })
}
setLocalStorage(res:any){
  localStorage.setItem("eweekly_user",res.data.email);
  console.log(res.data.email);
}
toggleForm(){
this.activeClass= !this.activeClass
}
}
