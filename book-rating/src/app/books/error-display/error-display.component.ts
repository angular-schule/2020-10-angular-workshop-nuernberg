import { ChangeDetectionStrategy, Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'br-error-display',
  templateUrl: './error-display.component.html',
  styleUrls: ['./error-display.component.scss'] //,
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class ErrorDisplayComponent {

  @Input() control;

  isInvalid(): boolean {
    return this.control?.invalid &&
           this.control?.touched;
  }

}
