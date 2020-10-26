import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators } from '@angular/forms';
import { TabsetComponent } from 'ngx-bootstrap/tabs';
import { IpropertyBase } from 'src/app/model/ipropertybase';
import { AlertifyService } from 'src/app/services/alertify.service';
import { Property } from 'src/app/model/property';
import { CarsiService } from 'src/app/services/carsi.service';

@Component({
  selector: 'app-add-property',
  templateUrl: './add-property.component.html',
  styleUrls: ['./add-property.component.css']
})
export class AddPropertyComponent implements OnInit {
  // @ViewChild('Form') addPropertyForm: NgForm;
  @ViewChild('formTabs') formTabs: TabsetComponent;
  isNextClicked: boolean;

  property = new Property();


  addPropertyForm: FormGroup;

  propertyView: IpropertyBase = {
    Id: null,
    Name: '',
    SellRent: null,
    Transmission: null,
    Price: null,
    Model: null,
    ProdYear: null,
    Fuel: null,
    CarBody: null,
    Capacity: null,
    MechPower: null,
    Mileage: null


  };
  constructor(private fb: FormBuilder, private router: Router, private alertify: AlertifyService, private carservice: CarsiService) { }

  ngOnInit() {
    this.CreateAddPropertyForm();
  }

  CreateAddPropertyForm(){
    this.addPropertyForm = this.fb.group({
      BasicInfo: this.fb.group({
        SellRent: ['1', Validators.required],
        Name: [null, Validators.required],
        Model: [null, Validators.required],
        Price: [null, Validators.required],
        ProdYear: [null, Validators.required],
        Mileage: [null],
        Color: [null],
        VIN: [null]
      }),
      DetailsInfo: this.fb.group({
        Description: [null],
        Fuel: [null, Validators.required],
        Transmission: [null, Validators.required],
        CarBody: [null, Validators.required],
        Capacity: [null, Validators.required],
        MechPower: [null, Validators.required]
      }),
    });
  }
  onBack(){
    this.router.navigate(['/']);
  }


  //#region <Get Methods>
    //#region <BasicInfo>

  get BasicInfo(){
    return this.addPropertyForm.controls.BasicInfo as FormGroup;
  }

  get SellRent(){
    return this.BasicInfo.controls.SellRent as FormControl;
  }

  get Name(){
    return this.BasicInfo.controls.Name as FormControl;
  }
  get Model(){
    return this.BasicInfo.controls.Model as FormControl;
  }
  get Price(){
    return this.BasicInfo.controls.Price as FormControl;
  }
  get ProdYear(){
    return this.BasicInfo.controls.ProdYear as FormControl;
  }

  get Mileage(){
    return this.BasicInfo.controls.Mileage as FormControl;
  }
  get Color(){
    return this.BasicInfo.controls.Color as FormControl;
  }
  get VIN(){
    return this.BasicInfo.controls.VIN as FormControl;
  }
    //#endregion
    //#region <DetailsInfo>
  get DetailsInfo(){
    return this.addPropertyForm.controls.DetailsInfo as FormGroup;
  }
  get Description(){
    return this.DetailsInfo.controls.Description as FormControl;
  }
  get Fuel(){
    return this.DetailsInfo.controls.Fuel as FormControl;
  }
  get Transmission(){
    return this.DetailsInfo.controls.Transmission as FormControl;
  }
  get CarBody(){
    return this.DetailsInfo.controls.CarBody as FormControl;
  }
  get Capacity(){
    return this.DetailsInfo.controls.Capacity as FormControl;
  }
  get MechPower(){
    return this.DetailsInfo.controls.MechPower as FormControl;
  }
   //#endregion
//#endregion


  onSubmit(){
    this.isNextClicked = true;
    if (this.allTabsValid()){
      this.mapProperty();
      this.carservice.addProperty(this.property);
      console.log('SellRent=' + this.addPropertyForm.value.BasicInfo.SellRent);
      console.log(this.addPropertyForm);
      this.SellRent.value === '2' ? this.router.navigate(['/rent-property']) : this.router.navigate(['/']);
    }
  }

  mapProperty(): void{
    this.property.Id = this.carservice.newPropID();
    this.property.SellRent = +this.SellRent.value;
    this.property.Name = this.Name.value;
    this.property.Model = this.Model.value;
    this.property.Price = +this.Price.value;
    this.property.ProdYear = +this.ProdYear.value;
    this.property.Mileage = this.Mileage.value;
    this.property.Color = this.Color.value;
    this.property.VIN = this.VIN.value;
    this.property.Description = this.Description?.value;
    this.property.Fuel = this.Fuel?.value;
    this.property.Transmission = this.Transmission?.value;
    this.property.CarBody = this.CarBody?.value;
    this.property.Capacity = this.Capacity?.value;
    this.property.MechPower = this.MechPower?.value;
    this.property.PostedOn = new Date().toString();
  }

  allTabsValid(): boolean{
    if (this.BasicInfo.invalid)
    {
      this.formTabs.tabs[0].active = true;
      this.alertify.warning('Musisz wypełnić wszystkie wymagane pola!');
      return false;
    }
    if (this.DetailsInfo.invalid)
    {
      this.formTabs.tabs[1].active = true;
      this.alertify.warning('Musisz wypełnić wszystkie wymagane pola!');
      return false;
    }
    return true;
  }

  selectTab(tabId: number, IsCurrentTabValid?: boolean){
    this.isNextClicked = true;
    if (IsCurrentTabValid) {
      this.formTabs.tabs[tabId].active = true;
    }
    else{
      this.alertify.warning('Musisz wypełnić wszystkie wymagane pola!');
    }
  }
}
