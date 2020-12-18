import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { delay } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Book } from './book';

function getRandomInt(max) {
  return Math.floor(Math.random() * Math.floor(max));
}

@Injectable({
  providedIn: 'root'
})
export class BookStoreService {

  constructor(private http: HttpClient) { }

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(environment.apiUrl + 'books');
  }

  getSingleBook(isbn: string): Observable<Book> {
    return this.http.get<Book>(environment.apiUrl + 'books/' + isbn).pipe(
      delay(getRandomInt(2000))
    )
  }
}
