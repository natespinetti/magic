import { TestBed } from '@angular/core/testing';

import { FloridaService } from './florida.service';

describe('FloridaService', () => {
  let service: FloridaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FloridaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
