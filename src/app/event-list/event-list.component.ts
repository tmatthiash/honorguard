import { Component, OnInit } from '@angular/core';
import {ButtonModule} from 'primeng/button';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  isEditVisible = false;
  isAssignVisible = false;
  events:any = [];
  testDate: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.testDate = new Date();
    this.events = [
      {
        "id":0,
        "title": "funeral 1",
        "date": {
          "year": 2018,
          "month": 6,
          "day": 21
        },
        "startTime": {
          "hour": 13,
          "minute": 30
        },
        "endTime": {
          "hour": 15,
          "minute": 30
        },
        "notes": "blabhabhabhbahabhabh",
        "required": 0,
        "assigned": 2
      }
      ]
  }
  testEvent(){
    debugger;
    
  }
  newEvent(event){
    this.isEditVisible = true;
  }
  assignPeople(event){
    this.isAssignVisible = true;
  }

}
