import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';

import { TeamsService } from './teams.service';
import { TeamsListComponent } from './teams-list/teams-list.component';
import { TeamDetailComponent } from './team-detail/team-detail.component';
import { TopBannerComponent } from './top-banner/top-banner.component';

@NgModule({
  declarations: [
    AppComponent,
    HeroComponent,
    SearchComponent,
    TeamsListComponent,
    TeamDetailComponent,
    TopBannerComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: TeamsListComponent },
      { path: 'teams/:teamId', component: TeamDetailComponent },
    ])
  ],
  providers: [TeamsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
