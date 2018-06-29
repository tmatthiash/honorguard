import { Component, OnInit } from '@angular/core';
import {PickListModule} from 'primeng/picklist';

@Component({
  selector: 'app-assign',
  templateUrl: './assign.component.html',
  styleUrls: ['./assign.component.css']
})
export class AssignComponent implements OnInit {
 
  event;
  availablePeople = [];
  pickedPeople = [];
  
  constructor() { }

  ngOnInit() {
      this.event = 
      {
        "id":0,
        "title": "funeral 1",
        "addressName": "the funeral store",
        "address": "123 whatever st",
        "city": "st louis",
        "state": "IL",
        "zip": "12345",
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
      this.availablePeople = [
        "TSgt Alvin Alverez",
        "A1C Ben Borders",
        "SrA Carl Colbert",
        "A1C David Devito",
        "Amn Emily Elastname",
        "SSgt Francine Fogle"
        ];
  }

}
