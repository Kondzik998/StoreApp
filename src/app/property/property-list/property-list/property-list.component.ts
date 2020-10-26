import { Component, OnInit } from '@angular/core';
import { CarsiService } from 'src/app/services/carsi.service';
import { ActivatedRoute } from '@angular/router';
import { IpropertyBase } from 'src/app/model/ipropertybase';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {
  SellRent = 1;
  constructor(private route: ActivatedRoute, private carsiService: CarsiService ) { }

  Properties: IpropertyBase[];
  ngOnInit(): void {
    if (this.route.snapshot.url.toString()){
      this.SellRent = 2;
    }
    this.carsiService.getAllProperties(this.SellRent).subscribe(
        data =>
          {
            this.Properties = data;
            console.log(data);
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
