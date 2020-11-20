import { TestBed } from '@angular/core/testing';

import { BooksSharedService } from './books-shared.service';

describe('BooksSharedService', () => {
  let service: BooksSharedService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BooksSharedService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
