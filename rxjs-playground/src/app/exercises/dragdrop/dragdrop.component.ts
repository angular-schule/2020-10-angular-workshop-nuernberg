import { Component, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { concatMap, map, mergeMap, startWith, takeUntil, filter, tap } from 'rxjs/operators';

export interface Position {
  x: number;
  y: number;
}

@Component({
  selector: 'rxw-dragdrop',
  templateUrl: './dragdrop.component.html',
  styleUrls: ['./dragdrop.component.scss']
})
export class DragdropComponent implements OnInit {

  targetPosition$: Observable<Position>;

  @ViewChild('target', { static: true }) target;

  ngOnInit() {
    const mouseMove$ = fromEvent<MouseEvent>(document, 'mousemove');
    const mouseDown$ = fromEvent<MouseEvent>(this.target.nativeElement, 'mousedown');
    const mouseUp$ = fromEvent<MouseEvent>(document, 'mouseup');

    /**
     * Nutze RxJS, um die rote Box mit Drag-and-drop zu bewegen.
     *
     * Die Methode setTargetPosition(e: MouseEvent) ändert die Position der Box.
     * Nutze die Observables mouseMove$, mouseDown$ und mouseUp$ in einer geeigneten Kombination.
     * Beginne damit, dass die Box am Mauszeiger klebt.
     * Sorge dann dafür, dass dieser Prozess erst beim Klick (mouseDown$) beginnt.
     * Beende den Prozess, sobald mouseUp$ feuert.
     */

    /******************************/

    // TODO! :-D
    this.targetPosition$ = mouseDown$.pipe(
      tap(eDown => console.log(eDown)),
      mergeMap(eDown => mouseMove$.pipe(
        takeUntil(mouseUp$),
        map(e => ({
          x: e.pageX - (eDown.target as HTMLElement).offsetTop,
          y: e.pageY - (eDown.target as HTMLElement).offsetLeft
        }))
      )),

      // startWith([500, 500])
    );

    /******************************/
  }
// offsetLeft, offsetTop

}
