import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { StartViewComponent } from './start-view.component';

import { HeroComponent } from '../hero/hero.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { PlayerStatsComponent } from '../player-stats/player-stats.component';
import { TeamDetailModule } from '../team-detail/team-detail.module';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { TeamListComponent } from '../team-list/team-list.component';
import { StatsChartComponent } from '../stats-chart/stats-chart.component'


@NgModule({
  declarations: [
    HeroComponent,
    PlayerDetailComponent,
    PlayerStatsComponent,
    TeamDetailComponent,
    StartViewComponent,
    TopBannerComponent,
    TeamListComponent,
    StatsChartComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TeamDetailModule,
    RouterModule.forRoot([
      { path: '', component: StartViewComponent },
      { path: 'teams/:teamId', component: TeamDetailComponent },
      { path: 'player/:playerId', component: PlayerDetailComponent },
    ])
  ],
  providers: [],
})
export class StartViewModule { }
