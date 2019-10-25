import { Component, OnInit } from '@angular/core';
import { BookService } from '../book.service';
import { Book } from 'src/model/book';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.css']
})
export class HomePageComponent implements OnInit {

  top3Readed: Book[];

  constructor(private bookService: BookService) { }

  ngOnInit() {
    this.getTop3ReadedFromService();
  }

  getTop3ReadedFromService() {
    this.bookService.getTop3Readed().subscribe(data => {
      this.top3Readed = data;
      console.log(this.top3Readed);
    })
  }

}
