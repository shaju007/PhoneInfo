import { TestBed, inject } from '@angular/core/testing';

import { SratingService } from './srating.service';

describe('SratingService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [SratingService]
    });
  });

  it('should be created', inject([SratingService], (service: SratingService) => {
    expect(service).toBeTruthy();
  }));
});
