import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import helper from '../helper'

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class TeamsListComponent implements OnInit {
  teams$;
  copyright$;

  inputData = {
    imgSrc:'https://www-league.nhlstatic.com/images/logos/league-dark/133.svg',
    name: 'National Hockey League',
    officialSiteUrl: 'http://nhl.com'
  };
  
  constructor(private teamsService: TeamsService) { }

  fetchTeams() {
    this.teamsService.fetchTeams().subscribe(val => {
      this.copyright$ = val.copyright
      this.teams$ = [...helper.sortName(val.teams)];
    });
  }

  ngOnInit() {
    this.fetchTeams();
  }

}
