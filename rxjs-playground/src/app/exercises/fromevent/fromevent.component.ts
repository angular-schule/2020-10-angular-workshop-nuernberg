import { Component, OnInit } from '@angular/core';
import { fromEvent, Observable } from 'rxjs';
import { map, startWith, debounceTime } from 'rxjs/operators';

@Component({
  selector: 'rxw-fromevent',
  templateUrl: './fromevent.component.html',
})
export class FromeventComponent {

  // html: {{ currentWidth | async }}
  // async sorgt auch für unsubscribe

  // beachte wann das Orginalevent gefeuert wird
  currentWidth = fromEvent(window, 'resize').pipe(
    map(_ => window.innerWidth),
    debounceTime(1000),
    startWith(window.innerWidth)
  );

  /**
   *  Schreibe die jeweils aktuelle Fensterbreite in das Property this.currentWidth
   *
   * Nutze fromEvent, um das resize-Event auf window zu abonnieren.
   * Initialisiere das Observable mit der aktuellen Fensterbreite (window.innerWidth)
   * Entprelle den Eventstrom, damit nicht zu viele Events gefeuert werden
   */

  /******************************/

}
