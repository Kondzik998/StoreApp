import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { IpropertyBase } from '../model/ipropertybase';
import { IProperty } from '../model/iproperty';
import { Property } from '../model/property';

@Injectable({
  providedIn: 'root'
})
export class CarsiService {
constructor(private http: HttpClient) { }

  getAllProperties(SellRent: number): Observable<IpropertyBase[]>{
    return this.http.get('data/properties.json').pipe(
      map(data => {
        const PropertiesArray: Array<IpropertyBase> = [];
        const localProperties = JSON.parse(localStorage.getItem('newProperty'));
        if (localProperties)
        {
          for (const id in localProperties)
        {
          if (localProperties.hasOwnProperty(id) && localProperties[id].SellRent === SellRent)
          {
            PropertiesArray.push(localProperties[id]);
          }
        }
        }
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

  addProperty(property: Property){
    let newProp = [property];

    if (localStorage.getItem('newProperty')) {
      newProp = [property,
                  ...JSON.parse(localStorage.getItem('newProperty'))];
    }
    localStorage.setItem('newProperty', JSON.stringify(newProp));
  }

  newPropID(){
    if (localStorage.getItem('PID'))
    {
      localStorage.setItem('PID', String(+localStorage.getItem('PID') + 1));
      return +localStorage.getItem('PID');
    } else{
      localStorage.setItem('PID', '101');
      return 101;
    }
  }
}
