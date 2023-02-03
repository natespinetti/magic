import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wind',
  templateUrl: './wind.component.html',
  styleUrls: ['./wind.component.scss']
})
export class WindComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit(): void {
  }

}
