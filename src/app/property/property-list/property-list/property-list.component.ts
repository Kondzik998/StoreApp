import { Component, OnInit } from '@angular/core';
import { CarsiService } from 'src/app/services/carsi.service';
import { Iproperty } from './Iproperty.interface';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  constructor(private route: ActivatedRoute, private carsiService: CarsiService ) { }

  Properties: Iproperty[];
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
    );
    // this.http.get('data/properties.json').subscribe(
    //   data => {
    //     this.Properties = data;
    //   }
    // );
  }

}
