import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-precip',
  templateUrl: './precip.component.html',
  styleUrls: ['./precip.component.scss']
})
export class PrecipComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit(): void {
  }

}
