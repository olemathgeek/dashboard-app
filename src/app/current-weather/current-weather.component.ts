import { Component, OnInit } from '@angular/core';
import { WeatherService } from '../weather.service';

@Component({
  selector: 'app-current-weather',
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.scss']
})
export class CurrentWeatherComponent implements OnInit {
  conditions;

  constructor(private weatherService: WeatherService) {
    setInterval(() => {
      this.getConditions();
    }, 600000);
  }

  ngOnInit() {
    this.getConditions();
  }

  getConditions() {
    this.weatherService.getConditions().toPromise().then(data => {
      this.conditions = data;
      console.log('conditions: ', this.conditions);
    });
  }

}
