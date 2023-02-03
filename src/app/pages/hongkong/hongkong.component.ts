import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HongkongService } from 'src/app/services/hongkong.service';

@Component({
  selector: 'app-hongkong',
  templateUrl: './hongkong.component.html',
  styleUrls: ['./hongkong.component.scss']
})
export class HongkongComponent implements OnInit {

  location = this.hongkong;
  parkInfo = this.hongkong.parkInfo;

  constructor(private hongkong: HongkongService, private router: Router) {}

  ngOnInit(): void {
  }

}
