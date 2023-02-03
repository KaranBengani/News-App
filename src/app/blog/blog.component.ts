import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { StoreService } from '../store.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(public http: HttpClient, public store: StoreService){}
  modal:boolean=true;
selectedblog:any="hello";
  news:any;
  ngOnInit(){
    console.log(this.store.category);
    this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${this.store.category}&apiKey=5a15f82320c54c608c7370e6a1f5af00&limit=4`).subscribe((res) => {
      if(res != null){
        // this.filter(res)
        // console.log(res.articles.author);
        this.filter(res);
      }
      else
        alert("failed")
    })
  }
 people:any[] = [
  {
    "id":1,
    "aos":"fade-right"
  },
  {
    "id":2,
    "aos":"fade-left"
  },
  {
    "id":3,
    "aos":"fade-right"
  }
 ]
 filter(res:any){
  this.news = res.articles;
  console.log(this.news[1].urlToImage);
 }
 check(val:string){
  this.http.get(`https://newsapi.org/v2/top-headlines?country=in&category=${val}&apiKey=5a15f82320c54c608c7370e6a1f5af00&limit=4`).subscribe((res) => {
    if(res != null){
      this.filter(res);
    }
    else
      alert("failed")
  })
 }
 checkAuth(blog:any){
  if(localStorage.getItem("eweekly_user")!=null){
    
    this.modal = false
  }
  else{
    console.log(blog);
    this.selectedblog = blog;
    this.modal = true;
  }
 }
}
