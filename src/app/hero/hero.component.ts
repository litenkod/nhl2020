import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hero',
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.scss']
})
export class HeroComponent implements OnInit {

  @Input() inputData: any[];

  // @Output() onDatePicked: EventEmitter<any> = new EventEmitter<any>();
  // public pickDate(date: any): void {
  //   this.onDatePicked.emit(date);
  // }

  constructor() { }
  
  ngOnInit() {
    console.log(this.inputData)
  }


}
