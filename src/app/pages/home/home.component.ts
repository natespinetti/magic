import { Component, OnInit } from '@angular/core';
import { CaliService } from 'src/app/services/cali.service';
import { FloridaService } from 'src/app/services/florida.service';
import { HongkongService } from 'src/app/services/hongkong.service';
import { LocationApiService } from 'src/app/services/location-api.service';
import { ParisService } from 'src/app/services/paris.service';
import { ShanghaiService } from 'src/app/services/shanghai.service';
import { TokyoService } from 'src/app/services/tokyo.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  location = this.loc;
  florida = this.fl;
  california = this.ca;
  hongkong = this.hk;
  shanghai = this.sh;
  tokyo = this.tk;
  paris = this.pa;
  arr: string[];
  hours: number[];
  dateBG: (parkDate: any) => boolean;

    dateFl = new Date().toLocaleString("en-US", { timeZone: "America/New_York", hourCycle: 'h23', hour: "2-digit" });
    dateCa = new Date().toLocaleString("en-US", { timeZone: "America/Los_Angeles", hourCycle: 'h23', hour: "2-digit"  });
    dateSh = new Date().toLocaleString("en-US", { timeZone: "Asia/Shanghai", hourCycle: 'h23', hour: "2-digit"  });
    dateHK = new Date().toLocaleString("en-US", { timeZone: "Asia/Hong_Kong", hourCycle: 'h23', hour: "2-digit"  });
    dateTk = new Date().toLocaleString("en-US", { timeZone: "Asia/Tokyo", hourCycle: 'h23', hour: "2-digit"  });
    datePa = new Date().toLocaleString("en-US", { timeZone: "Europe/Paris", hourCycle: 'h23', hour: "2-digit"  });

  constructor(private loc: LocationApiService, private fl: FloridaService, private ca: CaliService, private hk: HongkongService, private sh: ShanghaiService, private tk: TokyoService, private pa: ParisService) {
    this.arr = ['06', '07', '08', '09', '10', '11', '12', '13', '14', '15', '16', '17', '18'];
    this.hours = [12,1,2,3,4,5,6,7,8,9,10,11,12,1,2,3,4,5,6,7,8,9,10,11];

    this.dateBG = function dateBG(parkDate: any) {
      let a = this.arr.indexOf(parkDate);

      if (a != -1) {
        return true;
      } else {
        return false;
      }
  };
  }


  ngOnInit(): void {
  }

}
