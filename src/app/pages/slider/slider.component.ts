import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';
import { LocationApiService } from 'src/app/services/location-api.service';

@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.scss']
})
export class SliderComponent implements OnInit {
  
  location = this.loc;
  unixTime = this.location.unixTime;
  unixDay = this.location.unixDay;
  unixSun = this.location.unixSun;
  @ViewChild('slider', { static: true }) slider: IonSlides;

  constructor(private loc: LocationApiService, private router: Router){
    this.slider = {} as IonSlides;
  }

  ngOnInit(): void {
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const activeRoute = this.router.url.split('/')[1];
      let slideIndex;
      switch (activeRoute) {
        case 'florida':
          slideIndex = 0;
          break;
        case 'california':
          slideIndex = 1;
          break;
        case 'hong-kong':
          slideIndex = 2;
          break;
        case 'paris':
          slideIndex = 3;
          break;
        case 'shanghai':
          slideIndex = 4;
          break;
        case 'tokyo':
          slideIndex = 5;
          break;
        default:
          slideIndex = 0;
          break;
      }
      this.slider.slideTo(slideIndex);
    });
  }

  ngAfterViewInit(): void {
    this.unixTime();
    this.unixDay();
    this.unixSun();
  }

  public slideConfig = {
        speed: 500,
  };

  onSlideChange(): void {
    this.slider.getActiveIndex().then(index => {
      let slideIndex;
      switch (index) {
        case 0:
          slideIndex = 'florida';
          break;
        case 1:
          slideIndex = 'california';
          break;
        case 2:
          slideIndex = 'hong-kong';
          break;
        case 3:
          slideIndex = 'paris';
          break;
        case 4:
          slideIndex = 'shanghai';
          break;
        case 5:
          slideIndex = 'tokyo';
          break;
        default:
          slideIndex = 'florida';
          break;
      }
      this.router.navigate(['/' + slideIndex]);
    });
  }
}
