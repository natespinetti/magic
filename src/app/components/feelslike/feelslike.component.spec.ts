import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeelslikeComponent } from './feelslike.component';

describe('FeelslikeComponent', () => {
  let component: FeelslikeComponent;
  let fixture: ComponentFixture<FeelslikeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeelslikeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FeelslikeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
