import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';

import { TeamsService } from '../teams.service';
import { TeamsListComponent } from '../teams-list/teams-list.component';

import { TeamDetailComponent } from '../team-detail/team-detail.component';
import { HeroComponent } from '../hero/hero.component';
import { TopBannerComponent } from '../top-banner/top-banner.component';


@NgModule({
  declarations: [
    TopBannerComponent,
    TeamsListComponent,
    TeamDetailComponent,
    HeroComponent,
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: '', component: TeamsListComponent },
      { path: 'teams/:teamId', component: TeamDetailComponent },
    ])
  ],
  providers: [TeamsService],
})
export class TeamsListModule { }
