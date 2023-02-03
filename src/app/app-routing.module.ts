import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { BlogComponent } from './blog/blog.component';
import { PhotoGalleryComponent } from './photo-gallery/photo-gallery.component';
import { AboutComponent } from './about/about.component';
import { AuthFormComponent } from './auth-form/auth-form.component';

const routes: Routes = [
  {path:' ', redirectTo: '/blog', pathMatch: 'full'},
  {path: 'blog', component: BlogComponent},
  {path: 'photo', component: PhotoGalleryComponent},
  {path: 'about', component: AboutComponent},
  {path: "auth", component: AuthFormComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

}
