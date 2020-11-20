import { ChangeDetectionStrategy, Component, EventEmitter, Input, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { of } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'br-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'] ,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDisplayComponent {

  isInvalid$ = of();

  @Input() set control(c: FormControl) {

    this.isInvalid$ = c.statusChanges.pipe(
      map(() => c.invalid && c.touched)
    );
  }
}
