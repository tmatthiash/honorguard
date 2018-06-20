import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import {ScheduleModule} from 'primeng/schedule';

@Component({
  selector: 'app-calendar',
  templateUrl: './calendar.component.html',
  styleUrls: ['./calendar.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class CalendarComponent implements OnInit {
  events: any[];
  header: any;
  
  constructor() { }
    ngOnInit(){
        this.header = {
            left: 'prev,next today',
            center: 'title',
            right: 'month,agendaWeek,agendaDay'
        };
      this.events = [
            {
                "title": "All Day Event",
                "start": "2018-06-01"
            },
            {
                "title": "Long Event",
                "start": "2018-06-07",
                "end": "2018-06-10"
            },
            {
                "title": "Repeating Event",
                "start": "2018-06-09T16:00:00"
            },
            {
                "title": "Repeating Event",
                "start": "2018-06-16T16:00:00"
            },
            {
                "title": "Conference",
                "start": "2018-06-11",
                "end": "2018-06-13"
            }
        ];
      
    }
    testFunction(event){
      debugger;
      var newDate = event.date._d
      var i = 8;
    }

}
