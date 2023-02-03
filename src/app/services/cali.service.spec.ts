import { TestBed } from '@angular/core/testing';

import { CaliService } from './cali.service';

describe('CaliService', () => {
  let service: CaliService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CaliService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
