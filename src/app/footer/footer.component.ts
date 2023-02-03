import { Component } from '@angular/core';
import { FormControl,FormBuilder,Validators} from '@angular/forms';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent {
constructor(public fb: FormBuilder){}
  FooterChange: boolean = true;
  FooterMap: boolean = false;

  ChangeFunc(){

    this.FooterChange = false;
    this.FooterMap = true;
  }

  ChangeFunc2(){
    this.FooterChange = true;
    this.FooterMap = false;
  }
  contactForm = this.fb.group({
    subject: ['',[Validators.required,Validators.minLength(2)]],
    desc: ['',[Validators.required]]
  })
}
