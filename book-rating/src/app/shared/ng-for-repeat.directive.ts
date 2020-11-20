import { NgForOf } from '@angular/common';
import { Directive, Input } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[ngFor][ngForRepeat]'
})
export class NgForRepeatDirective<T> extends NgForOf<T> {

  @Input() set ngForRepeat(x: number) {
    this.ngForOf = new Array(x >= 0 ? x : 0);
  }

}
