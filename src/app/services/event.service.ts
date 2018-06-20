import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
@Injectable()
export class EventService {
    
    constructor(private http: HttpClient) {}

    getEvents() {
        return this.http.get('showcase/resources/data/scheduleevents.json')
                    .toPromise()
                    .then((res: Response) => res.json())
                    .then(data => { return data; });
    }
}