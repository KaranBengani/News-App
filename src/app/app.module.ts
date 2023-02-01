import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { NewsPaperComponent } from './news-paper/news-paper.component';
import { HeroLandingComponent } from './hero-landing/hero-landing.component';
import { AboutComponent } from './about/about.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoComponent } from './photo/photo.component';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { LoginComponent } from './login/login.component';
import { BlogmodalComponent } from './blogmodal/blogmodal.component';
import { NgxTypedJsModule } from 'ngx-typed-js';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    PhotoGalleryComponent,
    NewsPaperComponent,
    HeroLandingComponent,
    AboutComponent,
    BlogComponent,
    PhotoComponent,
    NavBarComponent,
    LoginComponent,
    BlogmodalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    NgxTypedJsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
