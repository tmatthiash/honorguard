import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {

  events:any;
  constructor() { }

  ngOnInit() {
    this.events = [
      {
        "id":0,
        "title": "funeral 1",
        "date": Date.now(),
        "startTime": Date.now()+100,
        "endTime": Date.now()+400,
        "notes": "blabhabhabhbahabhabh",
        "required": 0,
        "assigned": 2
      }
      ]
  }

}
