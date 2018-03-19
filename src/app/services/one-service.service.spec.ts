import { TestBed, inject } from '@angular/core/testing';

import { OneServiceService } from './one-service.service';

describe('OneServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OneServiceService]
    });
  });

  it('should be created', inject([OneServiceService], (service: OneServiceService) => {
    expect(service).toBeTruthy();
  }));
});
