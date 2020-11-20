import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BooksSharedComponent } from './books-shared.component';

describe('BooksSharedComponent', () => {
  let component: BooksSharedComponent;
  let fixture: ComponentFixture<BooksSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BooksSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BooksSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
