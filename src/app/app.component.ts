import { Component } from '@angular/core';
// import * as AOS from 'aos';
// import { init } from "aos/src/js/aos.js";
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'news';
  ngOnInit() {
    // AOS.init();
  }

}
