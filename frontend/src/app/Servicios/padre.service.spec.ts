import { TestBed, inject } from '@angular/core/testing';

import { PadreService } from './padre.service';

describe('PadreService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PadreService]
    });
  });

  it('should be created', inject([PadreService], (service: PadreService) => {
    expect(service).toBeTruthy();
  }));
});
