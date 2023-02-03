import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrecipComponent } from './precip.component';

describe('PrecipComponent', () => {
  let component: PrecipComponent;
  let fixture: ComponentFixture<PrecipComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PrecipComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PrecipComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
