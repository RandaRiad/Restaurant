import { TestBed } from '@angular/core/testing';

import { LunchService } from './lunch.service';

describe('LunchService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: LunchService = TestBed.get(LunchService);
    expect(service).toBeTruthy();
  });
});
