import { Component, OnInit } from '@angular/core';
import { TeamsService } from '../teams.service';

@Component({
  selector: 'app-copyright-text',
  templateUrl: './copyright-text.component.html',
  styleUrls: ['./copyright-text.component.scss']
})
export class CopyrightTextComponent implements OnInit {
  copyright$: any;

  constructor(private teamsService: TeamsService) { }

  fetchTeams() {
    this.teamsService.fetchTeams().subscribe(val => {
      this.copyright$ = val.copyright
    });
  }

  ngOnInit() {
    this.fetchTeams();
  }
}
