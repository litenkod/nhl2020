import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TeamsService } from '../teams.service';
import { TeamsListComponent } from './start-view.component';

import { HeroComponent } from '../hero/hero.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { PlayerStatsComponent } from '../player-stats/player-stats.component';
import { TeamDetailModule } from '../team-detail/team-detail.module';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';


@NgModule({
  declarations: [
    HeroComponent,
    PlayerDetailComponent,
    PlayerStatsComponent,
    TeamDetailComponent,
    TeamsListComponent,
    TopBannerComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    TeamDetailModule,
    RouterModule.forRoot([
      { path: '', component: TeamsListComponent },
      { path: 'teams/:teamId', component: TeamDetailComponent },
      { path: 'player/:playerId', component: PlayerDetailComponent },
    ])
  ],
  providers: [],
})
export class TeamsListModule { }
