import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-start-view',
  templateUrl: './start-view.component.html',
  styleUrls: ['./start-view.component.scss']
})
export class StartViewComponent implements OnInit {

  copyright$;

  inputData = {
    imgSrc:'https://www-league.nhlstatic.com/images/logos/league-dark/133.svg',
    name: 'National Hockey League',
    officialSiteUrl: 'http://nhl.com'
  };
  
  constructor() { }

  ngOnInit() {

  }

}
