import { TestBed } from '@angular/core/testing';

import { NumverifyService } from './numverify.service';

describe('NumverifyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NumverifyService = TestBed.get(NumverifyService);
    expect(service).toBeTruthy();
  });
});
