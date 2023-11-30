import { TestBed } from '@angular/core/testing';

import { DatatranferService } from './datatranfer.service';

describe('DatatranferService', () => {
  let service: DatatranferService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DatatranferService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
