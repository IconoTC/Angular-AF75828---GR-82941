import { TestBed } from '@angular/core/testing';

import { ApiRepo } from './api-repo';

describe('ApiRepo', () => {
  let service: ApiRepo;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiRepo);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
