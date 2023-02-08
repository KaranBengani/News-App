import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor() { }
  checkAuth(){
    if (localStorage.getItem('eweekly_user') == 'admin@admin.com') {
      return true;
    }
    else{
      return false
    }
  }
}
