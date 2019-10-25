import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, tap, catchError } from 'rxjs/operators';
import { Book } from 'src/model/book';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable()

export class BookService {
  private bookUrl = 'http://localhost:3000/books';

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    let bookUrlDESC = `${this.bookUrl}?_sort=id&_order=DESC`;
    return this.http.get<Book[]>(bookUrlDESC).pipe(
      tap(data => {

      }),
      catchError(error => of([]))
    );
  }

  getBooksById(id: number): Observable<Book[]> {
    let idBookUrl = `${this.bookUrl}/${id}`;
    return this.http.get<Book[]>(idBookUrl).pipe(
      tap(data => {

      }),
      catchError(error => of([]))
    );
  }

  getBooksBySearch(search: any): Observable<Book[]> {
    let searchBookUrl = `${this.bookUrl}?name_like=${search}`;
    return this.http.get<Book[]>(searchBookUrl).pipe(
      tap(data => {

      }),
      catchError(error => of([]))
    );
  }

  getTop3Readed(): Observable<Book[]> {
    let top3BookUrl = `${this.bookUrl}?_sort=readed&_order=DESC&_limit=3`;
    return this.http.get<Book[]>(top3BookUrl).pipe(
      tap(data => {

      }),
      catchError(error => of([]))
    );
  }

  addNewBookToDB(newBook: Book): Observable<Book[]> {
    return this.http.post<Book[]>(this.bookUrl, newBook).pipe(
      tap(data => {

      }),
      catchError(error => of([])))
  }

  updateBook(book: Book, id: number): Observable<Book[]> {
    let idBookUrl = `${this.bookUrl}/${id}`;
    return this.http.patch<Book[]>(idBookUrl, book).pipe(
      tap(data => {

      }),
      catchError(error => of([])))
  }

  deleteBook(id: number): Observable<Book[]> {
    let idBookUrl = `${this.bookUrl}/${id}`;
    return this.http.delete<Book[]>(idBookUrl).pipe(
      tap(data => {

      }),
      catchError(error => of([])))
  }
}