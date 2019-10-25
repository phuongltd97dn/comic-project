import { Component, OnInit } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  checkLogin = true;
  search = new FormControl('', [Validators.required]);

  constructor() { }

  ngOnInit() {
  }

  searchBook(search) {
    if (search === '') {
      alert('Vui lòng nhập từ khóa!');
    } else {
      window.location.href = `http://localhost:4200/search/${search}`;
    }
  }
}
