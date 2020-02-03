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
  // playerData$;

  constructor(
    private playerStatsService: PlayerStatsService) { }

  fetchPlayerStats(PlayerId) {
    this.playerStatsService.fetchPlayerStats(PlayerId).subscribe(val => {
      console.log('val :', val);
      this.playerStats$ = val.stats[0].splits[0].stat;
    });
  }

  ngOnInit() {
    console.log('this.playerData.id :', this.playerData);
    this.fetchPlayerStats(this.playerData.id)
  }

}
