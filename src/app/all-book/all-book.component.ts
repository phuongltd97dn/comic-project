import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from 'src/model/category';
import { BookService } from '../book.service';
import { Book } from 'src/model/book';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-all-book',
  templateUrl: './all-book.component.html',
  styleUrls: ['./all-book.component.css']
})
export class AllBookComponent implements OnInit {

  books: Book[];
  categories: Category[];
  newId: number;
  selectedCategories: number[];

  constructor(private categoryService: CategoryService, private bookService: BookService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.getCategoryFromService();
    this.getBookFromService();
    this.getBookByCategory();
    this.getBookBySearch();
  }

  getCategoryFromService() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  getBookFromService() {
    this.bookService.getBooks().subscribe(data => {
      this.books = data;
    })
  }

  getBookByCategory() {
    const search = this.route.snapshot.paramMap.get('category');

    if (search === 'all') {
      this.getBookFromService();
    } else {
      this.books = [];
      this.categoryService.getCategories().subscribe(data => {
        this.categories = data;
        for (const category of this.categories) {
          if (search === category.categoryName) {
            this.bookService.getBooks().subscribe(data => {
              for (const obj of data) {
                obj.category.some((element) => {
                  if (element == category.id) {
                    this.books.push(obj);
                    return true;
                  }
                })
              }
            })
          }
        }
      })
    }
  }

  getBookBySearch() {
    const search = this.route.snapshot.paramMap.get('search');
    this.books = [];
    this.bookService.getBooksBySearch(search).subscribe(data => {
      this.books = data;
    });
  }

  addBook(name, author, image, content) {
    let newBook = new Book();
    newBook.name = name;
    newBook.img = image;
    newBook.author = author;
    newBook.status = 'Đang tiến hành';
    newBook.category = this.selectedCategories;
    newBook.content = content;
    newBook.readed = 0;
    newBook.dateAccess = 0;

    this.bookService.addNewBookToDB(newBook).subscribe(() => {
      alert("Upload thành công!");
      window.location.href = "http://localhost:4200/allbook/all";
    });
  }
}
