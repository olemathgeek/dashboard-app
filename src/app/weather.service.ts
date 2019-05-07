import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  private conditionsUrl = 'http://api.openweathermap.org/data/2.5/weather?zip=55311,us&APPID=08b134e0daf54b3f7833f28ef0c99d40';
  private forecastUrl = 'http://api.openweathermap.org/data/2.5/forecast?zip=55311,us&APPID=08b134e0daf54b3f7833f28ef0c99d40';

  constructor(private http: HttpClient) { }

  getConditions(): Observable<any> {
    return this.http.get(this.conditionsUrl);
  }

  getForecast(): Observable<any> {
    return this.http.get(this.forecastUrl);
  }
}
