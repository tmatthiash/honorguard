import { Component, OnInit } from '@angular/core';
import {TableModule} from 'primeng/table';
import {DropdownModule} from 'primeng/dropdown';
import {SelectItem} from 'primeng/api';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {MatSelectModule} from '@angular/material';

interface Role{
    label: string,
    value: number
}

@Component({
  selector: 'app-role-manager',
  templateUrl: './role-manager.component.html',
  styleUrls: ['./role-manager.component.css']
})
export class RoleManagerComponent implements OnInit {
  
  people: any[];
  //TODO: REMOVE AFTER TESTING

  roleOptions: any[];
  selectedTest: any;
  dataLoaded = false;
  
  constructor() { 
      this.roleOptions = [
        {label:'Member', value: 0},
        {label:'Manager', value: 1},
        {label:'Funeral Director', value: 2}
      ];
      this.people = [
            {
                "id": 1,
                "name": "John Doe",
                "role": {
                  "value": 0,
                  "label": "Member"
                }
            },
            {
              "id": 2,
                "name": "Jim Whateaver",
                "role": {
                  "value": 2,
                  "label": "Funeral Director"
                }
            },
            {
              "id": 3,
                "name": "Bill Smith",
                "role": {
                  "value": 0,
                  "label": "Member"
                }
            },
            {
              "id": 4,
                "name": "Tom Jones",
                "role": {
                  "value": 1,
                  "label": "Manager"
                }
            },
            {
              "id": 5,
                "name": "Kim White",
                "role": {
                  "value": 0,
                  "label": "Member"
                }
            },
            {
              "id": 6,
                "name": "Stan Baker",
                "role": {
                  "value": 0,
                  "label": "Member"
                }
            }
        ];
    this.selectedTest = this.roleOptions[1].value;
    this.dataLoaded = true;
    

  }
  changeEvent(event, id, value)
  {
    for(var i =0; i<this.people.length; i++){
      if(this.people[i].id == id)
      {
        this.people[i].role = this.roleOptions[value];
      }
    }
  }

  ngOnInit() {
  
  }

}








