import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
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
}
