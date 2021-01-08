import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { getFiles, logon } from '../store/socket.actions';
import { selectFiles, selectLoggedIn, selectLogonErrorMessage, selectLogonInProgress } from '../store/socket.selectors';

@Component({
  selector: 'br-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class StartComponent {

  files$ = this.store.pipe(select(selectFiles));
  loggedIn$ = this.store.pipe(select(selectLoggedIn));
  logonErrorMessage$ = this.store.pipe(select(selectLogonErrorMessage));
  logonInProgress$ = this.store.pipe(select(selectLogonInProgress));

  myForm = new FormGroup({
    name: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required),
  });

  constructor(private store: Store) {
  }

  getFiles() {
    this.store.dispatch(getFiles());
  }

  doLogin() {
    const { name, password } = this.myForm.value;
    this.store.dispatch(logon({ name, password }));
  }

}
