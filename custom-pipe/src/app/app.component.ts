import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'custom-pipe';

  Fahrenheit: number;
  celcius: number;   

  constructor() {
    this.Fahrenheit = 0;
    this.celcius = 0;
  }
}
