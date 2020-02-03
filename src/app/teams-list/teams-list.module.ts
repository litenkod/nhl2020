import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TeamsService } from '../teams.service';
import { TeamsListComponent } from '../teams-list/teams-list.component';

import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { HeroComponent } from '../hero/hero.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
import { TeamDetailModule } from '../team-detail/team-detail.module';
import { PlayerStatsComponent } from '../player-stats/player-stats.component';


@NgModule({
  declarations: [
    TopBannerComponent,
    TeamsListComponent,
    TeamDetailComponent,
    PlayerDetailComponent,
    PlayerStatsComponent,
    HeroComponent,
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
  providers: [TeamsService],
})
export class TeamsListModule { }
