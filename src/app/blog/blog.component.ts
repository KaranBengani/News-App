import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.scss']
})
export class BlogComponent {
  constructor(public http: HttpClient){}
  news:any;
  ngOnInit(){
    this.http.get('https://newsapi.org/v2/top-headlines?country=in&category=sports&apiKey=5a15f82320c54c608c7370e6a1f5af00&limit=4').subscribe((res) => {
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
}
