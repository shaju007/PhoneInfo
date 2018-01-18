import { TestBed, inject } from '@angular/core/testing';

import { UreviewService } from './ureview.service';

describe('UreviewService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UreviewService]
    });
  });

  it('should be created', inject([UreviewService], (service: UreviewService) => {
    expect(service).toBeTruthy();
  }));
});
