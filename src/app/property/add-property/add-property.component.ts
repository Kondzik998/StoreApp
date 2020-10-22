import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/ipropertybase';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;


  addPropertyForm: FormGroup;

  propertyView: IpropertyBase = {
    Id: null,
    Name: '',
    SellRent: null,
    PType: null,
    Price: null,
    Model: null,
    ProdYear: null,
    Fuel: null,
    CarBody: null,
    Capacity: null,
    MechPower: null,
    Mileage: null


  };
  constructor(private fb: FormBuilder, private router: Router, private alertify: AlertifyService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      SellRent: [null, Validators.required],
      PType: [null, Validators.required],
      Name: [null, Validators.required],
      Price: [null, Validators.required],
      Model: [null, Validators.required],
      ProdYear: [null, Validators.required],
      Fuel: [null, Validators.required],
      Capacity: [null, Validators.required],
      MechPower: [null, Validators.required],
      CarBody: [null, Validators.required],
    });
  }
  onBack(){
    this.router.navigate(['/']);
  }

  onSubmit(){
    console.log('it works!');
    console.log('SellRent=' + this.addPropertyForm.value.SellRent);
    console.log(this.addPropertyForm);
    if (this.addPropertyForm.valid)
    {
      this.alertify.success('Pomyslne!');
    }
    else{
      this.alertify.error('Nie dzial');
    }
  }

  selectTab(tabId: number){
    this.formTabs.tabs[tabId].active = true;
  }
}
