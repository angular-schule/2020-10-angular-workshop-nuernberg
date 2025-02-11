import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subject, ReplaySubject, timer, Subscription } from 'rxjs';
import { takeWhile, takeUntil, take } from 'rxjs/operators';

@Component({
  selector: 'rxw-unsubscribe',
  templateUrl: './unsubscribe.component.html',
})
export class UnsubscribeComponent implements OnInit, OnDestroy {

  logStream$ = new ReplaySubject<string | number>();
  destroy$ = new Subject();

  /**
   * Öffne die Browser-Console: Dort siehst Du den Output eines Observables, das jede Sekunde einen Wert generiert.
   * Navigiere zurück auf die Startseite und beobachte die Console:
   * Die Subscription läuft weiter. Wir haben einen klassischen Memory Leak erzeugt...
   *
   * Sorge dafür, dass die Subscription in der Methode ngOnDestroy() beendet wird!
   * Sie wird beim Buttonklick und beim Wegnavigieren ausgelöst.
   *
   * Es gibt noch weitere Lösungen, das Problem zu lösen...
   */
  ngOnInit() {
    const interval$ = timer(0, 1000);

    interval$.pipe(

      // takeWhile
      // takeUntil(this.destroy$)
      take(10)

    ).subscribe({
      next: msg => this.log(msg),
      error: err => this.log('ERROR: ' + err),
      complete: () => this.log('COMPLETED')
    });
  }

  ngOnDestroy() {
    this.logStream$.next('DESTROY');

    this.destroy$.next();
  }


  log(msg: string | number) {
    console.log(msg);
    this.logStream$.next(msg);
  }
}
