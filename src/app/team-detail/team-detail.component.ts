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
  selectedItem: string;
  sortList$ = [
    'Name',
    'Number',
    'Position',
  ];

  inputData = {};

  constructor(
    private route: ActivatedRoute,
    private teamDetailService: TeamDetailService) { }

  sortRoster(sortValue) {
    if(sortValue !== null && this.selectedItem !== sortValue ) {
      this.selectedItem = sortValue;
    }

    switch (this.selectedItem) {
      case 'Position':
        this.roster$ = helper.rosterSortPos(this.roster$);
        break;

      case 'Name':
        this.roster$ = helper.rosterSortFullName(this.roster$);
        break;

      case 'Number':
        this.roster$ = helper.rosterSortNumber(this.roster$);
        break;

      default:
        this.roster$ = helper.rosterSortPos(this.roster$);
        break;
    }
  }

  fetchTeam(TeamId) {
    this.teamDetailService.fetchTeamDetails(TeamId).subscribe(val => {
      this.team$ = val.teams[0];

      this.inputData = {
        imgSrc:'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/' + this.team$.id + '.svg',
        name: this.team$.name,
        officialSiteUrl: this.team$.officialSiteUrl
      }

      this.roster$ = [...val.teams[0].roster.roster];
      this.sortRoster(null);
    });
  }

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchTeam(params.get('teamId'));
    });
  }

}
