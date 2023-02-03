import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LocationApiService } from './services/location-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'CS701-Project-Spinetti';

  location = this.loc;
  unixTime = this.location.unixTime;
  unixDay = this.location.unixDay;
  unixSun = this.location.unixSun;
  onSlideChange:any;
  
  constructor(private loc: LocationApiService, private router: Router){
    this.onSlideChange = function onSlideChange() {

      let a = document.querySelectorAll('ion-slide'); 

        Array.from(a).forEach(function(el) {
          if (el.classList.contains('florida') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/florida']);
          } else if (el.classList.contains('california') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/california']);
          } else if (el.classList.contains('hongkong') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/hong-kong']);
          } else if (el.classList.contains('paris') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/paris']);
          } else if (el.classList.contains('shanghai') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/shanghai']);
          } else if (el.classList.contains('tokyo') && el.classList.contains('swiper-slide-active')) {
            router.navigate(['/tokyo']);
          }
      
        });
      
    }
  }

    public slideConfig = {
        loop: true,
        effect: 'fade',
        speed: 500
  };



  ngAfterViewInit(): void {
    this.unixTime();
    this.unixDay();
    this.unixSun();
  }
}
