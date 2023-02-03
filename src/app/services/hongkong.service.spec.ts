import { TestBed } from '@angular/core/testing';

import { HongkongService } from './hongkong.service';

describe('HongkongService', () => {
  let service: HongkongService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(HongkongService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
