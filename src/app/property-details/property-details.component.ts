import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CarsiService } from '../services/carsi.service';
import { Iproperty } from '../property/property-list/property-list/Iproperty.interface';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.propertyId = this.route.snapshot.params['id'];

    this.route.params.subscribe(
      (params) =>
      {
        this.propertyId = +params['id'];
      }
    );
  }

  onNextCar(){
    this.propertyId++;
    this.router.navigate(['property-details', this.propertyId]);

  }
}
