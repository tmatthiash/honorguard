import { Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormControl} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {} from 'googlemaps';
import {MapsAPILoader} from '@agm/core';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {
  isModalVisible = false;
  event:any = [];
  searchControl: FormControl;
  testDate: Date = new Date();
  latitude = 38.5416;
  longitude = -89.8550;
  
  placeName;
  placeStreetNumber;
  placeStreet;
  placeCity;
  placeState;
  placeZip;


 @ViewChild("search") public searchElementRef: ElementRef;
 
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone) { 

  }
  
  handleClick(event){

  }


  ngOnInit() {
    
    
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {

    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        debugger;
        let place:google.maps.places.PlaceResult = autocomplete.getPlace();
        //var result = autocomplete.getPredictions();
        if(place.geometry === undefined || place.geometry === null){
          return;
        }
        
        for(var i = 0; i < place.address_components.length; i++){
          switch(place.address_components[i].types[0]) {
            case "street_number":
              this.placeStreetNumber = place.address_components[i].short_name;
            break;
            case "route":
              this.placeStreet = place.address_components[i].short_name;
              break;
            case "locality":
              this.placeCity = place.address_components[i].short_name;
              break;
            case "administrative_area_level_1":
              this.placeState = place.address_components[i].short_name;
              break;
            case "postal_code":
              this.placeZip = place.address_components[i].short_name;
              break;              
            default:
              break;
          }
        }
        

        //this.latitude = place.geometry.location.lat();
        //this.longitude = place.geometry.location.lng();
      });
    });
  });
    
    
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
