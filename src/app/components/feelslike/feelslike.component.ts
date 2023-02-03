import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-feelslike',
  templateUrl: './feelslike.component.html',
  styleUrls: ['./feelslike.component.scss']
})
export class FeelslikeComponent implements OnInit {

  @Input() location: any;

  constructor() { }

  ngOnInit(): void {
  }

}
