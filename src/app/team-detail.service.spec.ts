import { TestBed } from '@angular/core/testing';

import { TeamDetailService } from './team-detail.service';

describe('TeamDetailService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamDetailService = TestBed.get(TeamDetailService);
    expect(service).toBeTruthy();
  });
});
