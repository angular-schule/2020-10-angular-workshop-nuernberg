import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output } from '@angular/core';
import { Book } from './book';

@Component({
  selector: 'lib-book',
  template: `<div class="card mb-4">
  <div class="card-body bg-light">
    <img src="https://api.angular.schule/avatar/{{book.rating}}" class="float-right img-thumbnail">

    <div class="card-title">
      <h2>{{book.title}}</h2>
    </div>

    <p>
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
