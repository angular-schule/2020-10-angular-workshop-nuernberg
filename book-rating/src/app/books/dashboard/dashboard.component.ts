import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';
import { selectBooks, selectBooksLoading } from '../store/book.selectors';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // AsyncPipe einsetzen!
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books$ = this.store.pipe(select(selectBooks));
  loading$ = this.store.pipe(select(selectBooksLoading));

  constructor(private store: Store) { }

  ngOnInit(): void {

    // this.bs.getBooks().subscribe(books => this.books = books);

    // setTimeout(() => this.books = [], 3000);
  }

  doRateUp(book: Book): void {
    // const ratedBook = this.br.rateUp(book);
    // this.update(ratedBook);
  }

  doRateDown(book: Book): void {
    // const ratedBook = this.br.rateDown(book);
    // this.update(ratedBook);
  }

  update(ratedBook: Book): void {
    // this.books = this.books
    //   .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
    //   .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book): void {

    // this.books = [...this.books, book];

  }
}
