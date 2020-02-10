import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { StartViewModule } from './start-view/start-view.module';
import { CopyrightTextComponent } from './copyright-text/copyright-text.component';
import { PlayerListComponent } from './player-list/player-list.component';


@NgModule({
  declarations: [
    AppComponent,
    CopyrightTextComponent,
    PlayerListComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StartViewModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
