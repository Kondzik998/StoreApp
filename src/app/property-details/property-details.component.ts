import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-property-details',
  templateUrl: './property-details.component.html',
  styleUrls: ['./property-details.component.css']
})
export class PropertyDetailsComponent implements OnInit {
 public propertyId: number;
  constructor(private route: ActivatedRoute, private router: Router) { }

  ngOnInit() {
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
