import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from './components/hero/hero.component';
import { HourlyComponent } from './components/hourly/hourly.component';
import { EightdayComponent } from './components/eightday/eightday.component';
import { PrecipComponent } from './components/precip/precip.component';
import { HumidityComponent } from './components/humidity/humidity.component';
import { FeelslikeComponent } from './components/feelslike/feelslike.component';
import { WindComponent } from './components/wind/wind.component';
import { FloridaComponent } from './pages/florida/florida.component';
import { CaliforniaComponent } from './pages/california/california.component';
import { HongkongComponent } from './pages/hongkong/hongkong.component';
import { ShanghaiComponent } from './pages/shanghai/shanghai.component';
import { TokyoComponent } from './pages/tokyo/tokyo.component';
import { ParisComponent } from './pages/paris/paris.component';

import { LocationApiService } from './services/location-api.service'; 
import { HttpClientModule } from '@angular/common/http';
import { IonicModule } from '@ionic/angular';
import { BackgroundComponent } from './components/background/background.component';
import { RainPipe } from './pipes/rain.pipe';
import { WindPipe } from './pipes/wind.pipe';
import { KelvinPipe } from './pipes/kelvin.pipe';
import { AboutComponent } from './pages/about/about.component';
import { HomeComponent } from './pages/home/home.component';
import { ErrorComponent } from './pages/error/error.component';
import { SliderComponent } from './pages/slider/slider.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HeroComponent,
    HourlyComponent,
    EightdayComponent,
    PrecipComponent,
    HumidityComponent,
    FeelslikeComponent,
    WindComponent,
    FloridaComponent,
    CaliforniaComponent,
    HongkongComponent,
    ShanghaiComponent,
    TokyoComponent,
    ParisComponent,
    BackgroundComponent,
    RainPipe,
    WindPipe,
    KelvinPipe,
    AboutComponent,
    HomeComponent,
    ErrorComponent,
    SliderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    IonicModule.forRoot()
  ],
  providers: [LocationApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
