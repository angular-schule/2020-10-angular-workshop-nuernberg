import { HttpErrorResponse } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { catchError, map, mergeMap, share, switchMap } from 'rxjs/operators';
import { BookStoreService } from '../shared/book-store.service';

@Component({
  selector: 'br-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.scss']
})
export class BookDetailsComponent implements OnInit {

  showDetails = false;

  // book2$ = this.route.paramMap

  // .pipe(map(params => params.get('isbn')))

  // .pipe(switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
  //   catchError((e: HttpErrorResponse) => of({
  //     isbn: '000',
  //     title: 'Fehler: ' + e.message,
  //     description: '',
  //     rating: 1
  //   })))))

  // .pipe(share())


  book$ = this.route.paramMap.pipe(
    map(params => params.get('isbn')),
    switchMap(isbn => this.bs.getSingleBook(isbn).pipe(
      catchError((e: HttpErrorResponse) => of({
        isbn: '000',
        title: 'Fehler: ' + e.message,
        description: '',
        rating: 1
      }))
      // catchError(() => EMPTY)
    )),
    share()
  )

  constructor(private route: ActivatedRoute,
    private bs: BookStoreService) { }

  ngOnInit(): void {
      // .subscribe(paramMap => this.isbn = paramMap.get('isbn'));
  }

}
