import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-future-weather',
  templateUrl: './future-weather.component.html',
  styleUrls: ['./future-weather.component.scss']
})
export class FutureWeatherComponent implements OnInit {
  forecast;

  constructor(private weatherService: WeatherService) {
    setInterval(() => {
      this.getForecast();
    }, 600000);
  }

  ngOnInit() {
    this.getForecast();
  }

  getForecast() {
    this.weatherService.getForecast().toPromise().then(data => {
      if (data && data.list) {
        this.forecast = data.list
            .filter((item, index) => index < 9 );
        for (const info of this.forecast) {
          info.dateObj = new Date(info.dt_txt.replace(' ', 'T'));
        }
        console.log('forecast:', this.forecast);
      }
    });
  }

}
