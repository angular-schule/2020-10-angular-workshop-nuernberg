import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';
import { BookRatingService } from '../shared/book-rating.service';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  // VORSICHT: später Bug sobald wir Ajax einführen
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent implements OnInit {

  books: Book[];

  constructor(private br: BookRatingService) { }

  ngOnInit(): void {

    this.books = [{
      isbn: '000',
      title: 'Angular',
      description: 'Tolles Buch',
      rating: 5,
    },
    {
      isbn: '001',
      title: 'Angular 1',
      description: 'Tolles Buch 1',
      rating: 3,
    },
    {
      isbn: '002',
      title: 'Angular 2',
      description: 'Tolles Buch 2',
      rating: 1,
    }];

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
}
