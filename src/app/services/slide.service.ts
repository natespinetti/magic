import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SlideService {

  private slideIndexSource = new BehaviorSubject<number>(0);
  currentSlideIndex = this.slideIndexSource.asObservable();

  constructor() { }

  changeSlideIndex(index: number): void {
    this.slideIndexSource.next(index);
  }
}
