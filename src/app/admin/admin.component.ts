import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent {
  users: any;
  deleteUser: boolean = true;
  constructor(private http: HttpClient){

  }
  ngOnInit(){
   this.callFunc();
  }

  callFunc(){
    this.http.get('http://localhost:3000/users/getUser').subscribe((res)=>{
      this.users = res;
      console.log(this.users)
    })
  }

  delete(email: string){
    let body = {"email":email};
    this.http.post('http://localhost:3000/users/deleteUser',body).subscribe((res)=>{
      // this.users = res;
      // console.log(res);
      this.callFunc()
    })
  }
  longText = `The Shiba Inu is the smallest of the six original and distinct spitz breeds of dog
  from Japan. A small, agile dog that copes very well with mountainous terrain, the Shiba Inu was
  originally bred for hunting.`;
}


