import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogComponent } from './blog/blog.component';
import { AboutComponent } from './about/about.component';
import { PhotogalleryComponent } from './photogallery/photogallery.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
// import { AOS } from 'aos';
// import 'aos/dist/aos.css';
// import AOS from 'aos';
// import 'aos/dist/aos.css'; // You can also use <link> for styles
// // ..
// AOS.init();
@NgModule({
  declarations: [
    AppComponent,
    BlogComponent,
    AboutComponent,
    PhotogalleryComponent,
    FooterComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
