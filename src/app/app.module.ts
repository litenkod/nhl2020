import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

// import { HeroComponent } from './hero/hero.component';
import { SearchComponent } from './search/search.component';
// import { TopBannerComponent } from './top-banner/top-banner.component';
import { TeamsListModule } from './teams-list/teams-list.module';

@NgModule({
  declarations: [
    AppComponent,
    // HeroComponent,
    SearchComponent,
    // TopBannerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TeamsListModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
