import { Component, OnInit } from '@angular/core';
import { Subject, ReplaySubject } from 'rxjs';
import { scan, reduce } from 'rxjs/operators';

@Component({
  selector: 'rxw-game-score',
  templateUrl: './game-score.component.html',
})
export class GameScoreComponent implements OnInit {

  logStream$ = new ReplaySubject();
  score$ = new Subject<number>();

  currentScore = 0;
  finalScore: number;

  ngOnInit() {

    /**
     * Stell dir vor, dies sei ein Arcade-Klassiker.
     * Jetzt fehlt nur noch der Code, um den aktuellen und den finalen Punktestand zu ermitteln...
     */

    /******************************/

    // HIER, an dieser Stelle, kannst du loslegen!

    /******************************/

    this.score$.subscribe({
      next: value => this.logStream$.next(value),
      complete: () => this.logStream$.next('❌ COMPLETED')
    });
  }

  finishGame() {
    this.score$.complete();
  }

  addScore(amount: number) {
    this.score$.next(amount);
  }

}
