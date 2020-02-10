import { Component, OnInit, Input } from '@angular/core';
import { PlayerStatsService } from '../player-stats.service';
import { isObject } from 'util';


@Component({
  selector: 'app-player-stats',
  templateUrl: './player-stats.component.html',
  styleUrls: ['./player-stats.component.scss']
})
export class PlayerStatsComponent implements OnInit {

  @Input() playerData;

  playerCurrentStats$;
  playerSeasonStats$;
  playerCareerStats$;

  constructor(private playerStatsService: PlayerStatsService) { }

  filterBySequenceNumber(item) {
    if (item.sequenceNumber === 1) {
      return true
    }
  }

  fetchPlayerStats(PlayerId) {
    this.playerStatsService.fetchPlayerStats(PlayerId).subscribe(val => {
      let seasonStats = val.people[0].stats[0];
      let yearByYearPlayoffs = val.people[0].stats[1];
      yearByYearPlayoffs = seasonStats.splits.filter(item => {
        return item.league.id === 133 ? true : false;
      })
      this.playerCurrentStats$ = seasonStats.splits[seasonStats.splits.length - 1].stat;
      this.playerSeasonStats$ = seasonStats.splits.filter(item => {
        return item.league.id === 133 ? true : false;
      });
      let total = [...this.playerSeasonStats$, ...yearByYearPlayoffs]
      this.playerCareerStats$ = val.people[0].stats[2].splits[0].stat;
    });
  }

  ngOnInit() {
    this.fetchPlayerStats(this.playerData.id);
  }

}
