import { Component,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-news-paper',
  templateUrl: './news-paper.component.html',
  styleUrls: ['./news-paper.component.scss']
})
export class NewsPaperComponent {
  @Output() navEvent = new EventEmitter<boolean>();
  showUp(): void {
    window.scroll(0,0);
  }
  navClick(){
    this.navEvent.emit(false)
    this.showUp()
  }
}
