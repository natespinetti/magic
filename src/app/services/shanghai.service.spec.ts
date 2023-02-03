import { TestBed } from '@angular/core/testing';

import { ShanghaiService } from './shanghai.service';

describe('ShanghaiService', () => {
  let service: ShanghaiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ShanghaiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
