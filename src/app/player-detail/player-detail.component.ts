import { Component, OnInit } from '@angular/core';
import { PlayerDetailService } from '../player-detail.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-player-detail',
  templateUrl: './player-detail.component.html',
  styleUrls: ['./player-detail.component.scss']
})
export class PlayerDetailComponent implements OnInit {

  inputData = {}; 
  player$;

  constructor(
    private route: ActivatedRoute,
    private playerDetailService: PlayerDetailService) { }

  fetchPlayerDetail(PlayerId) {
    this.playerDetailService.fetchPlayerDetails(PlayerId).subscribe(val => {
      this.player$ = val.people[0];
      this.inputData = {
        imgSrc:'https://www-league.nhlstatic.com/images/logos/teams-current-primary-light/' + this.player$.currentTeam.id + '.svg',
        name: `<span class="hero__numbers">${this.player$.primaryNumber}</span><span class="hero__name">${this.player$.fullName}</span>`,
        officialSiteUrl: ''
      }
    });
  }
  
  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.fetchPlayerDetail(params.get('playerId'))
    });
  }

}
