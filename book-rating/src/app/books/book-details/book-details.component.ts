import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { map, mergeMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  book$ = this.route.paramMap.pipe(
    map(params => params.get('isbn')),
    mergeMap(isbn => this.bs.getSingleBook(isbn))
  )

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit(): void {
      // .subscribe(paramMap => this.isbn = paramMap.get('isbn'));
  }

}
