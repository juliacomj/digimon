import { TestBed } from '@angular/core/testing';

import { DigimonDetailsService } from './digimon-details.service';

describe('DigimonDetailsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DigimonDetailsService = TestBed.get(DigimonDetailsService);
    expect(service).toBeTruthy();
  });
});
