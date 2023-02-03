import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EightdayComponent } from './eightday.component';

describe('EightdayComponent', () => {
  let component: EightdayComponent;
  let fixture: ComponentFixture<EightdayComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EightdayComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EightdayComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
