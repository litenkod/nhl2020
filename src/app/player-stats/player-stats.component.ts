import { Component, OnInit, Input } from '@angular/core';
import { PlayerStatsService } from '../player-stats.service';


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  @Input() playerData;

  playerStats$;

  constructor(
    private playerStatsService: PlayerStatsService) { }

  fetchPlayerStats(PlayerId) {
    this.playerStatsService.fetchPlayerStats(PlayerId).subscribe(val => {
      let stats = val.stats[0].splits[0] ? val.stats[0].splits[0].stat : null
      this.playerStats$ = stats;
    });
  }

  ngOnInit() {
    this.fetchPlayerStats(this.playerData.id)
  }

}
