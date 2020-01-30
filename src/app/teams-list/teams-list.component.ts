import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';
import helper from '../helper'

@Component({
  selector: 'app-teams-list',
  templateUrl: './teams-list.component.html',
  styleUrls: ['./teams-list.component.scss']
})
export class TeamsListComponent implements OnInit {
  teams$;

  constructor(private teamsService: TeamsService) { }

  fetchTeams() {
    this.teamsService.fetchTeams().subscribe(val => {
      this.teams$ = [...helper.sortName(val.teams)];
    });
  }

  ngOnInit() {
    this.fetchTeams();
  }

}
