import { TestBed } from '@angular/core/testing';

import { TeamsService } from './teams.service';

describe('TeamService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TeamsService = TestBed.get(TeamsService);
    expect(service).toBeTruthy();
  });
});
