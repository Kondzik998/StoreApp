import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { Iproperty } from '../property-list/property-list/Iproperty.interface';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;


  propertyView: Iproperty = {
    Id: null,
    Name: '',
    Price: null,
    SellRent: null,
    Type: null
  };
  constructor(private router: Router) { }

  ngOnInit() {
  }

  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('it works!');
    console.log(this.addPropertyForm);
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }
}
