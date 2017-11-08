import { TestBed, inject } from '@angular/core/testing';

import { PriceConfigService } from './price-config.service';

describe('PriceConfigService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PriceConfigService]
    });
  });

  it('should be created', inject([PriceConfigService], (service: PriceConfigService) => {
    expect(service).toBeTruthy();
  }));
});
