import { Component, OnInit } from '@angular/core';
import { LocationApiService } from '../../services/location-api.service'; 

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent implements OnInit {

  location = this.about;

  constructor(private about: LocationApiService) { }

  ngOnInit(): void {
  }

}
