import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
// import { TopBannerComponent } from './top-banner/top-banner.component';
import { TeamsListModule } from './start-view/start-view.module';
import { CopyrightTextComponent } from './copyright-text/copyright-text.component';
import { CopyrightTextModule } from './copyright-text/copyright-text.module';

// import { PlayerStatsComponent } from './player-stats/player-stats.component';


@NgModule({
  declarations: [
    AppComponent,
    // SearchComponent,
    CopyrightTextComponent,
    // PlayerStatsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamsListModule,
    // CopyrightTextModule,
  ],
  // providers: [TeamsService],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
