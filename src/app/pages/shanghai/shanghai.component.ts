import { Component, OnInit } from '@angular/core';
import { ShanghaiService } from 'src/app/services/shanghai.service';

@Component({
  selector: 'app-shanghai',
  templateUrl: './shanghai.component.html',
  styleUrls: ['./shanghai.component.scss']
})
export class ShanghaiComponent implements OnInit {
  
  location = this.shanghai;
  parkInfo = this.shanghai.parkInfo;

  constructor(private shanghai: ShanghaiService) {}

  ngOnInit(): void {
  }

}