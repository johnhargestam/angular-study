import { TestBed } from '@angular/core/testing';

import { RateLimitService } from './ratelimit.service';

describe('RateLimitService', () => {
  let service: RateLimitService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RateLimitService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
