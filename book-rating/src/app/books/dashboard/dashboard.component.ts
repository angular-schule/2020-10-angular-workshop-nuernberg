import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // VORSICHT: später Bug sobald wir Ajax einführen
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[] = [];

  constructor(private br: BookRatingService, private bs: BookStoreService) { }

  ngOnInit(): void {



    // setTimeout(() => this.books = [], 3000);
  }

  doRateUp(book: Book): void {
    const ratedBook = this.br.rateUp(book);
    this.update(ratedBook);
  }

  doRateDown(book: Book): void {
    const ratedBook = this.br.rateDown(book);
    this.update(ratedBook);
  }

  update(ratedBook: Book): void {
    this.books = this.books
      .map(b => b.isbn === ratedBook.isbn ? ratedBook : b)
      .sort((a, b) => b.rating - a.rating);
  }

  addBook(book: Book): void {

    this.books = [...this.books, book];

  }
}
