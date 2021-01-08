import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { getFiles } from '../store/socket.actions';
import { selectFiles } from '../store/socket.selectors';

@Component({
  selector: 'br-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent {

  files$ = this.store.pipe(select(selectFiles))

  constructor(private store: Store) { }

  getFiles() {
    this.store.dispatch(getFiles());
  }

}
