import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CaliService } from 'src/app/services/cali.service';

@Component({
  selector: 'app-california',
  templateUrl: './california.component.html',
  styleUrls: ['./california.component.scss']
})
export class CaliforniaComponent implements OnInit {
  
  location = this.cali;
  parkInfo = this.cali.parkInfo.California;
  logo = this.cali.parkInfo.logo;

  constructor(private cali: CaliService, private router: Router) {}

  ngOnInit(): void {
  }

}
