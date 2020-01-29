import { Component, OnInit } from '@angular/core';
import heroData from './hero.json';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {
  public heroList:{name:string, header:string, preamble:string}[] = heroData;
  public currentIndex = 0;

  constructor() { }

  ngOnInit() {
    // console.log('Init Hero');
  }

  slide(value) {

    if (value > 0) {
      this.currentIndex = this.currentIndex + value !== heroData.length ? this.currentIndex + value : 0;
    } else {

      this.currentIndex = this.currentIndex === 0 ? heroData.length - 1 : this.currentIndex + value;
    }

  }

}
