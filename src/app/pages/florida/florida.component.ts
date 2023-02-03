import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FloridaService } from 'src/app/services/florida.service';

@Component({
  selector: 'app-florida',
  templateUrl: './florida.component.html',
  styleUrls: ['./florida.component.scss']
})
export class FloridaComponent implements OnInit {
  
  location = this.florida;
  parkInfo = this.florida.parkInfo;

  constructor(private florida: FloridaService, private router: Router) {}

  ngOnInit(): void {
  }

}
