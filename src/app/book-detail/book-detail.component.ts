import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { BookService } from '../book.service';
import { Book } from 'src/model/book';
import { CategoryService } from '../category.service';
import { Category } from 'src/model/category';

@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent implements OnInit {
  private book: Book[];
  private categories: Category[];
  selectedCategories: number[];
  selectedStatus: string;

  constructor(private route: ActivatedRoute, private categoryService: CategoryService, private bookService: BookService) { }

  ngOnInit() {
    this.getIdByRoute();
    this.getCategoryFromService();
  }

  getIdByRoute() {
    const id = +this.route.snapshot.paramMap.get('id');
    this.bookService.getBooksById(id).subscribe(data => {
      this.book = data;
    })
  }

  getCategoryFromService() {
    this.categoryService.getCategories().subscribe(data => {
      this.categories = data;
    })
  }

  transferIdtoCategoryName(id, categories) {
    let categoryName = [];
    categories.forEach(category => {
      id.forEach(element => {
        if (element == category.id) {
          categoryName.push(category.categoryName);
        }
      });
    });
    return categoryName;
  }

  updateBook(id, name, author, image, content) {
    let book = new Book();
    book.name = name;
    book.author = author;
    book.status = this.selectedStatus;
    book.category = this.selectedCategories;
    book.img = image;
    book.content = content;

    this.bookService.updateBook(book, id).subscribe(() => {
      alert("Sửa thành công!");
      window.location.reload();
    })
  }

  deleteBook(id: number) {
    this.bookService.deleteBook(id).subscribe(() => {
      alert('Xóa thành công!');
      window.location.href = "http://localhost:4200/allbook/all";
    })
  }
}
