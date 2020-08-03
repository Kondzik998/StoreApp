import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Iproperty } from '../property/property-list/property-list/Iproperty.interface';

@Injectable({
  providedIn: 'root'
})
export class CarsiService {

constructor(private http: HttpClient) { }

  getAllProperties(): Observable<Iproperty[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const PropertiesArray: Array<Iproperty> = [];
        for (const id in data)
        {
          if (data.hasOwnProperty(id))
          {
            PropertiesArray.push(data[id]);
          }
        }
        return PropertiesArray;
      })
    );
  }
}
