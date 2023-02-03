import { Component, OnInit } from '@angular/core';
import { TokyoService } from 'src/app/services/tokyo.service';

@Component({
  selector: 'app-tokyo',
  templateUrl: './tokyo.component.html',
  styleUrls: ['./tokyo.component.scss']
})
export class TokyoComponent implements OnInit {

  location = this.tokyo;
  parkInfo = this.tokyo.parkInfo;

  constructor(private tokyo: TokyoService) {}

  ngOnInit(): void {
  }

}