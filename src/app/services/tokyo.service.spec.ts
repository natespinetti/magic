import { TestBed } from '@angular/core/testing';

import { TokyoService } from './tokyo.service';

describe('TokyoService', () => {
  let service: TokyoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TokyoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
