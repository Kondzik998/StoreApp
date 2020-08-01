import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CarsiService } from 'src/app/services/carsi.service';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor( private carsiService: CarsiService ) { }

  Properties: any;
  ngOnInit(): void {

    this.carsiService.getAllProperties().subscribe(
        data =>
          {
            this.Properties = data;
          },
          error =>
          {
            console.log(error);
          }
    )
    // this.http.get('data/properties.json').subscribe(
    //   data => {
    //     this.Properties = data;
    //   }
    // );
  }

}
