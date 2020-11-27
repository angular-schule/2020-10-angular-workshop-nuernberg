import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book';

// Eine Lib kann keine html.Datei haben. Stattdessen muss der
// HTML als String angegeben werden.

@Component({
  selector: 'lib-book',
  template: `<div class="card mb-4">
  <div class="card-body bg-light">
    <img src="https://api.angular.schule/avatar/{{book.rating}}" class="float-right img-thumbnail">

    <div class="card-title">
      <h2>{{book.title}}</h2>
    </div>

    <p>
      <label>__from book.component.ts__</label>
      {{book.description}} .........
    </p>


  </div>
</div>
`,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class BookComponent {
  @Input() book: Book;
}
