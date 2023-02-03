import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class LocationApiService {

  weather: any;
  parkInfo: any;
  unixTime: any;
  unixDay: any;
  unixSun: any;  
  arr: string[];
  hours: number[];
  unixBG: () => boolean;
  location: any;
  loc: any;
  
  constructor(private http: HttpClient, private router: Router) { 

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

      this.arr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
      this.hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];
  
      this.unixBG = function unixBG() {
        let a = this.location.weather.current.dt + this.loc.weather.timezone_offset;
        let b = new Date(a * 1000);
        let c = b.getUTCHours();
      
        if( c < 12) {
          a = this.hours[c] + "AM";
        } else {
          a = this.hours[c] + "PM";
        }
  
        let d = this.arr.indexOf(a);
  
        if (d != -1) {
          return true;
        } else {
          return false;
        }
    
    };

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

        });
      }
    
    };

    }
