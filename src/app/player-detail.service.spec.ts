import { TestBed } from '@angular/core/testing';

import { PlayerDetailService } from './player-detail.service';

describe('PlayerDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PlayerDetailService = TestBed.get(PlayerDetailService);
    expect(service).toBeTruthy();
  });
});
