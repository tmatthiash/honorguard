import { Component, OnInit, NgZone, ElementRef, ViewChild} from '@angular/core';
import {InputTextModule} from 'primeng/inputtext';
import {InputTextareaModule} from 'primeng/inputtextarea';
import {FormControl} from '@angular/forms';
import {ButtonModule} from 'primeng/button';
import {TabViewModule} from 'primeng/tabview';
import {} from 'googlemaps';
import {MapsAPILoader, GoogleMapsAPIWrapper} from '@agm/core';
import { HttpClient } from '@angular/common/http';
import {MessageService} from 'primeng/components/common/messageservice';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css'],
  providers: [MessageService]
})
export class EditEventComponent implements OnInit {
  isModalVisible = false;
  event:any = [];
  searchControl: FormControl;
  testDate: Date = new Date();
  latitude = 38.5416;
  longitude = -89.8550;
  
  stateList = [
    {value: "AL", viewValue: "AL"},
    {value: "AK", viewValue: "AK"},
    {value: "AS", viewValue: "AS"},
    {value: "AZ", viewValue: "AZ"},
    {value: "AR", viewValue: "AR"},
    {value: "CA", viewValue: "CA"},
    {value: "CO", viewValue: "CO"},
    {value: "CT", viewValue: "CT"},
    {value: "DE", viewValue: "DE"},
    {value: "DC", viewValue: "DC"},
    {value: "FL", viewValue: "FL"},
    {value: "GA", viewValue: "GA"},
    {value: "GU", viewValue: "GU"},
    {value: "HI", viewValue: "HI"},    
    {value: "ID", viewValue: "ID"},
    {value: "IL", viewValue: "IL"},
    {value: "IN", viewValue: "IN"},
    {value: "IA", viewValue: "IA"},
    {value: "KS", viewValue: "KS"},
    {value: "KY", viewValue: "KY"},
    {value: "LA", viewValue: "LA"},
    {value: "ME", viewValue: "ME"},
    {value: "MH", viewValue: "MH"},
    {value: "MD", viewValue: "MD"},
    {value: "MA", viewValue: "MA"},
    {value: "MI", viewValue: "MI"},
    {value: "MN", viewValue: "MN"},
    {value: "MD", viewValue: "MD"},  
    {value: "MA", viewValue: "MA"},
    {value: "MI", viewValue: "MI"},
    {value: "MN", viewValue: "MN"},
    {value: "MS", viewValue: "MS"},
    {value: "MO", viewValue: "MO"},
    {value: "MT", viewValue: "MT"},
    {value: "NE", viewValue: "NE"},
    {value: "NV", viewValue: "NV"},
    {value: "NC", viewValue: "NC"},
    {value: "ND", viewValue: "ND"},
    {value: "OH", viewValue: "OH"},
    {value: "OK", viewValue: "OK"}, 
    {value: "OR", viewValue: "OR"},
    {value: "PW", viewValue: "PW"},
    {value: "PA", viewValue: "PA"},
    {value: "PR", viewValue: "PR"},
    {value: "RI", viewValue: "RI"},
    {value: "SC", viewValue: "SC"},
    {value: "SD", viewValue: "SD"},
    {value: "TN", viewValue: "TN"},
    {value: "TX", viewValue: "TX"},
    {value: "UT", viewValue: "UT"},
    {value: "VT", viewValue: "VT"},
    {value: "VI", viewValue: "VI"}, 
    {value: "VA", viewValue: "VA"},
    {value: "WA", viewValue: "WA"},
    {value: "WV", viewValue: "WV"},
    {value: "WI", viewValue: "WI"},
    {value: "WY", viewValue: "WY"}
    ]
  
  placeName;
  placeStreetNumber;
  placeStreet;
  placeStreetAddress;
  placeCity;
  placeState = "AL";
  placeZip;
  googlePlaceDestination;
  theMap;
  directionsService;
  directionsDisplay;
  msgs;

 @ViewChild("search") public searchElementRef: ElementRef;
 
  constructor(private mapsAPILoader: MapsAPILoader, private ngZone: NgZone, private http: HttpClient, private messageService: MessageService) { 
    
  }
  
  handleClick(event){

  }
  mapReady(map){
    this.theMap = map;
  }

  ngOnInit() {

    
    
    this.searchControl = new FormControl();
    this.mapsAPILoader.load().then(() => {
    this.directionsService = new google.maps.DirectionsService();
    this.directionsDisplay = new google.maps.DirectionsRenderer();
    let autocomplete = new google.maps.places.Autocomplete(this.searchElementRef.nativeElement);
    autocomplete.addListener("place_changed", () => {
      this.ngZone.run(() => {
        let place:google.maps.places.PlaceResult = autocomplete.getPlace();
        //var result = autocomplete.getPredictions();
        if(place.geometry === undefined || place.geometry === null){
          return;
        }
        this.googlePlaceDestination = place;
        this.placeName = place.name;
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
        this.placeStreetAddress = this.placeStreetNumber + " " + this.placeStreet;
        this.latitude = place.geometry.location.lat();
        this.longitude = place.geometry.location.lng();
        this.renderDirections(this);
        
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
  
  
  
  renderDirections(that) {

    
    var startLocation = new google.maps.LatLng(38.5416, -89.8550);
    var destination = new google.maps.LatLng(that.latitude, that.longitude);

    that.directionsDisplay.setMap(that.theMap);
    var request = {
      origin:  "Scott Visitor Center",
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
    };
   that.directionsService.route(request, function(response, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        
              that.msgs = [];
              var infoMsg = "Distance:" + response.routes["0"].legs["0"].distance + "  Travel TIme:" + response.routes["0"].legs["0"].duration;
              this.msgs.push({severity:'info', summary:'Route Found', detail:infoMsg});
              that.directionsDisplay.setDirections(response);
            } else if (status == google.maps.DirectionsStatus.INVALID_REQUEST) {
                window.alert("Invalid request.");
            } else if (status == google.maps.DirectionsStatus.OVER_QUERY_LIMIT) {
                window.alert("Google has stopped accepting queries from this key for today."); //did not execute 
            } else if (status == google.maps.DirectionsStatus.UNKNOWN_ERROR) {
                window.alert("Google servers encountered an unexpected error. Try again momentarily."); //did not execute 
            } else window.alert("Not success."); //did not execute
    });

  }

}
