import { Component, OnInit } from '@angular/core';
import { Observable, of, from, timer, interval, ReplaySubject } from 'rxjs';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'rxw-creating',
  templateUrl: './creating.component.html',
})
export class CreatingComponent implements OnInit {

  logStream$ = new ReplaySubject<string | number>();

  ngOnInit() {
    /**
     * 1. Erstelle ein Observable und abonniere den Datenstrom.
     *    Probiere dazu die verschiedenen Creation Functions aus: of(), from(), timer(), interval()
     * 2. Implementiere außerdem ein Observable manuell, indem du den Konstruktor new Observabe() nutzt.
     *
     * Tipps:
     * Zum Abonnieren kannst du einen (partiellen) Observer oder ein einzelnes next-Callback verwenden.
     * Du kannst die Methode this.log() verwenden, um eine Ausgabe in der schwarzen Box im Browser zu erzeugen.
     */

    /******************************/

    const observer = {
      next: x => this.log(x),
      error: err => this.log('ERROR ' + err),
      complete: () => this.log('COMPLETE')
    };

    const observable = new Observable(subscriber => {
      subscriber.next('😃');
      subscriber.error('TOD!');
      subscriber.next('😉');
      subscriber.next('🎉');

    });

    // (AB)|
    // of('😃', '😎')
    // timer(0, 500)
    observable
      .subscribe(observer);

    // observable
    //   .subscribe(console.log);


    /******************************/
  }

  private log(msg: string | number) {
    this.logStream$.next(msg);
  }

}
