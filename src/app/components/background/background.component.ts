import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-background',
  templateUrl: './background.component.html',
  styleUrls: ['./background.component.scss']
})
export class BackgroundComponent implements OnInit {

  @Input() location: any;
  @Input() unixTime: any;

  arr:any;
  unixBG: any;
  hours: number[];

  constructor() { 
    this.arr = ['6AM', '7AM', '8AM', '9AM', '10AM', '11AM', '12PM', '1PM', '2PM', '3PM', '4PM', '5PM', '6PM'];
    this.hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];

    this.unixBG = function unixBG() {
      let a = this.location.weather.current.dt + this.location.weather.timezone_offset;
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
  }

  ngOnInit(): void {
  }

}
