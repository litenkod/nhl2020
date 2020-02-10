import { Component, OnInit, Input } from '@angular/core';
import helper from '../helper'
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss']
})
export class TeamListComponent implements OnInit {

  @Input() customClass: string;
  @Input() currentTeamId: string = '';
  teams$;
  copyright$;
  selectedTeam;

  constructor(private teamsService: TeamsService) { }

  fetchTeams() {
    this.teamsService.fetchTeams().subscribe(val => {
      this.copyright$ = val.copyright
      this.teams$ = [...helper.sortName(val.teams)];
      console.log('this.teams$ :', this.teams$);
    });
  }

  ngOnInit() {
    // console.log('this.currentTeamId :', this.currentTeamId);
    this.fetchTeams();
  }

}
