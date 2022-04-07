import { Component } from '@angular/core';

import arrayWords from '../utils/words';
import arrayCountry from '../utils/country';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'word-generator';

  words = '';
  limit = 10;

  countryCount = 0;
  countryList = '';

  handleSlideChange = (newLimit: number) => {
    this.limit = newLimit;
  };

  generate = () => {
    this.words = arrayWords.slice(0, this.limit).join(' ');
  };

  handleCountryClick = () => {
    this.countryCount = Math.floor(Math.random() * 15 + 1);
    this.countryList = arrayCountry.slice(0, this.countryCount).join(' ');
  };
}
