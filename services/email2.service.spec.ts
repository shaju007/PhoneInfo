import { TestBed, inject } from '@angular/core/testing';

import { Email2Service } from './email2.service';

describe('Email2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Email2Service]
    });
  });

  it('should be created', inject([Email2Service], (service: Email2Service) => {
    expect(service).toBeTruthy();
  }));
});
