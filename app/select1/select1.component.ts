import { Component, OnInit } from '@angular/core';

export interface Bike {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-select1',
  templateUrl: './select1.component.html',
  styleUrls: ['./select1.component.css']
})
export class Select1Component implements OnInit {

  bikes: Bike[] = [
    {value: 'sports-0', viewValue: 'Sports'},
    {value: 'offroad-1', viewValue: 'OffRoad'},
    {value: 'simple-2', viewValue: 'Simple'}
  ];

  constructor() { }

  ngOnInit() {
  }

}
