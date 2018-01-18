import { TestBed, inject } from '@angular/core/testing';

import { FavouriteService } from './favourite.service';

describe('FavouriteService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FavouriteService]
    });
  });

  it('should be created', inject([FavouriteService], (service: FavouriteService) => {
    expect(service).toBeTruthy();
  }));
});
