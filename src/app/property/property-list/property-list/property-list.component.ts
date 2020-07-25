import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-property-list',
  templateUrl: './property-list.component.html',
  styleUrls: ['./property-list.component.css']
})
export class PropertyListComponent implements OnInit {

  constructor() { }

  Properties: Array<any> = [
    {
    'Id': 1,
    'Name': 'Peugeot 307',
    'Type': 'Manual',
    'Price': 42112
    },
    {
      'Id': 2,
      'Name': 'Peugeot 307',
      'Type': 'Manual',
      'Price': 42112
    },
    {
      'Id': 3,
      'Name': 'Peugeot 307',
      'Type': 'Manual',
      'Price': 42112
    },
    {
      'Id': 4,
      'Name': 'Peugeot 307',
      'Type': 'Manual',
      'Price': 42112
    },
    {
      'Id': 5,
      'Name': 'Peugeot 307',
      'Type': 'Manual',
      'Price': 42112
    },
    {
      'Id': 6,
      'Name': 'Peugeot 207',
      'Type': 'Manual',
      'Price': 42112
    },
  ];
  ngOnInit() {
  }

}
