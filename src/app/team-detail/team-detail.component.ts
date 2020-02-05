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
  selectedItem;
  sortList$ = [
    'Name',
    'Number',
    'Position',
  ]

  inputData = {};

  constructor(
    private route: ActivatedRoute,
    private teamDetailService: TeamDetailService) { }

  sortRoster(sortValue) {
    this.selectedItem = sortValue;
    // sortValue.active = !sortValue.active; 
    switch (sortValue) {
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
        break;
    }
  }

  fetchTeam(TeamId) {
    this.teamDetailService.fetchTeamDetails(TeamId).subscribe(val => {
      this.team$ = val.teams[0];
      console.log('this.team$ :', this.team$);

      this.inputData = {
        imgSrc:'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/' + this.team$.id + '.svg',
        name: this.team$.name,
        officialSiteUrl: this.team$.officialSiteUrl
      }
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
