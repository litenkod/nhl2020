import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from '../app-routing.module';

// import { HeroComponent } from '../hero/hero.component';
import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { PlayerDetailComponent } from '../player-detail/player-detail.component';
// import { PlayerStatsComponent } from '../player-stats/player-stats.component';


@NgModule({
  declarations: [
    // PlayerStatsComponent,
    // HeroComponent,
    // PlayerDetailComponent,
  ],
  imports: [
    CommonModule,
  ]
})
export class TeamDetailModule { }
