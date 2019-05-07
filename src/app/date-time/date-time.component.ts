import { Component } from '@angular/core';

@Component({
  selector: 'app-date-time',
  templateUrl: './date-time.component.html',
  styleUrls: ['./date-time.component.scss']
})
export class DateTimeComponent {
  now: number;

  constructor() {
    setInterval(() => {
      this.now = Date.now();
    }, 1);
  }

}
