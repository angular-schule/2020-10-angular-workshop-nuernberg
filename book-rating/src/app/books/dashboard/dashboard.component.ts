import { Component, OnInit } from '@angular/core';
import { Book } from '../shared/book';

@Component({
  selector: 'br-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  books: Book[];

  constructor() { }

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

  }
}
