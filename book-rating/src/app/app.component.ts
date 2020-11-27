import { Component } from '@angular/core';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'br-root',
  // templateUrl: './app.component.svg',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'book-rating';

  constructor() {
    console.log(environment.apiUrl);
  }

  showRow = false;
}
