import { ChangeDetectionStrategy, Component, OnInit, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Book } from '../shared/book';

@Component({
  selector: 'br-create-book',
  templateUrl: './create-book.component.html',
  styleUrls: ['./create-book.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CreateBookComponent {

  isbn = new FormControl('', [
    Validators.required,
    Validators.minLength(3)
  ]);

  @Output() create = new EventEmitter<Book>();

  bookForm = new FormGroup({
    isbn: this.isbn,
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });

  save(): void {
    const newBook = {
      ...this.bookForm.value,
      rating: 1
    } as Book;


    // 1. Erzeuge ein Event mit dem Namen "create"
    // 2. emite das Event mit den neuen Book
    // 3. subscribe dich auf das Event
    // 4. Füge das Buch dem Array hinzu

    this.create.emit(newBook);

    this.bookForm.reset();
  }
}
