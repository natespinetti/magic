import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-hourly',
  templateUrl: './hourly.component.html',
  styleUrls: ['./hourly.component.scss']
})
export class HourlyComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit(): void {
  }

}
