import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsService } from '../teams.service';
import { CopyrightTextComponent } from './copyright-text.component';


@NgModule({
  declarations: [
    CopyrightTextComponent,
  ],
  imports: [
    CommonModule,
    // CopyrightTextComponent
  ],
  providers: [TeamsService],
})
export class CopyrightTextModule { 
  constructor(){
  }
}
