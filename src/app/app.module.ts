import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CurrentWeatherComponent } from './current-weather/current-weather.component';
import { FutureWeatherComponent } from './future-weather/future-weather.component';
import { NewsComponent } from './news/news.component';
import { DateTimeComponent } from './date-time/date-time.component';
import { DisneyNewsComponent } from './disney-news/disney-news.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentWeatherComponent,
    FutureWeatherComponent,
    NewsComponent,
    DateTimeComponent,
    DisneyNewsComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
