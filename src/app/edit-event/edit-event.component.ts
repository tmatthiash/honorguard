import { Component, OnInit } from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  isModalVisible = false;
  event:any = [];
  testDate: Date = new Date();
  constructor() { }

  ngOnInit() {
    this.testDate = new Date();
    this.event = 
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
      };
  }

}
