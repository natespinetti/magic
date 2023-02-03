import { Component, OnInit } from '@angular/core';
import { ParisService } from 'src/app/services/paris.service';

@Component({
  selector: 'app-paris',
  templateUrl: './paris.component.html',
  styleUrls: ['./paris.component.scss']
})
export class ParisComponent implements OnInit {

  location = this.paris;
  parkInfo = this.paris.parkInfo;

  constructor(private paris: ParisService) {}

  ngOnInit(): void {
  }

}