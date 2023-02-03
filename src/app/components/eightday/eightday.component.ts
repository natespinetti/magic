import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-eightday',
  templateUrl: './eightday.component.html',
  styleUrls: ['./eightday.component.scss']
})
export class EightdayComponent implements OnInit {

  @Input() location: any;
  
  constructor() { }

  ngOnInit(): void {
  }

}
