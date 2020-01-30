import { Component, OnInit } from '@angular/core';
import { TeamDetailService } from '../team-detail.service';
import { ActivatedRoute } from '@angular/router';

import helper from '../helper'

@Component({
  selector: 'app-team-detail',
  templateUrl: './team-detail.component.html',
  styleUrls: ['./team-detail.component.scss']
})
export class TeamDetailComponent implements OnInit {
  team$;
  roster$;

  constructor(
    private route: ActivatedRoute,
    private teamDetailService: TeamDetailService) { }

  sortRoster(sortValue) {
    switch (sortValue) {
      case 'pos':
        this.roster$ = helper.rosterSortPos(this.roster$);
        break;
    
      case 'name':
        this.roster$ = helper.rosterSortFullName(this.roster$);
        break;
    
      case 'number':
        this.roster$ = helper.rosterSortNumber(this.roster$);
        break;
          
      default:
        break;
    }
  }

  fetchTeam(TeamId) {
    this.teamDetailService.fetchTeamDetails(TeamId).subscribe(val => {
      this.team$ = val.teams[0];
      console.log('this.team$ :', this.team$);
      let rosterArray = val.teams[0].roster.roster;
      this.roster$ = [...helper.rosterSortPos(rosterArray)];
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchTeam(params.get('teamId'))
    });
  }

}
