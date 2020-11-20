import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

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

  bookForm = new FormGroup({
    isbn: this.isbn,
    title: new FormControl('', Validators.required),
    description: new FormControl(),
  });
}
