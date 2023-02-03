import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ShanghaiService {

  url: string;
  weather: any;
  parkInfo: any;
  unixTime: any;
  unixDay: any;
  unixSun: any;  
  clearLocal: () => void;
  
  constructor(private http: HttpClient, private router: Router) { 

    this.url = `https://api.openweathermap.org/data/3.0/onecall?lat=31.1434&lon=121.6579&appid=2cacf4104a695526583db39578b6e81a`;

    if (localStorage.getItem('shanghai') != null) {
      this.weather = JSON.parse(localStorage.getItem('shanghai')!);
    } else {
      this.http
      .get(this.url)
      .subscribe((res) => {
        this.weather = res;
        localStorage.setItem('shanghai', JSON.stringify(this.weather));
        setTimeout(this.clearLocal, 600000);
      },
      (error) => { 
          console.error('Sorry, there have been too many API requests today.')
          this.router.navigate(['/error']);
        })
    }

    this.clearLocal = function clearLocal() {
      localStorage.removeItem('shanghai');
    }

    this.parkInfo = require('../../assets/parkInfo.json');

    this.unixSun = function unixSunConverter(g:any) {
        let a = document.querySelectorAll(".unixsun");

        Array.from(a).forEach(function(el) {
          let b = el.innerHTML;
          let c = parseInt(b);
          let d = new Date(c * 1000);
          let e = d.getHours();
          let f = d.getMinutes();
      
          const hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
      
          if( e < 12) {
            el.innerHTML = hours[e] + ":" + f + "<span class='meridiem'> AM</span>";
          } else {
            el.innerHTML = hours[e] + ":" + f + "<span class='meridiem'> PM</span>";
          }
      
        });
      }

    this.unixTime = function unixTimeConverter(g:any) {
      if (g == null) {
        let a = document.querySelectorAll(".unix");

        Array.from(a).forEach(function(el) {
          let b = el.innerHTML;
          let c = parseInt(b);
          let d = new Date(c * 1000);
          let e = d.getUTCHours();
      
          const hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
      
          if( e < 12) {
            el.innerHTML = hours[e] + "<span class='meridiem'>AM</span>";
          } else {
            el.innerHTML = hours[e] + "<span class='meridiem'>PM</span>";
          }
        });
      } else if (g != null) {
          let c = parseInt(g);
          let d = new Date(c * 1000);
          let e = d.getHours();
      
          const hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
      
          if( e < 12) {
            g = hours[e] + "<span class='meridiem'>AM</span>";
          } else {
            g = hours[e] + "<span class='meridiem'>PM</span>";
          }
      
        };
      }

      this.unixDay = function unixDayConverter() {
        let a = document.querySelectorAll(".dow");
    
        Array.from(a).forEach(function(el) {
          let b = el.innerHTML;
          let c = parseInt(b);
          let d = new Date(c * 1000);
          let e = d.getDay();
    
          const days = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']; 
    
          el.innerHTML = days[e];

          if (a.item(0)) {
            a.item(0).innerHTML = 'Today';
          }
        });
      }
    
    };
}
