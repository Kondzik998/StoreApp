import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IpropertyBase } from '../model/ipropertybase';

@Injectable({
  providedIn: 'root'
})
export class CarsiService {
constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IpropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const PropertiesArray: Array<IpropertyBase> = [];
        for (const id in data)
        {
          if (data.hasOwnProperty(id) && data[id].SellRent === SellRent)
          {
            PropertiesArray.push(data[id]);
          }
        }
        return PropertiesArray;
      })
    );
  }
}
