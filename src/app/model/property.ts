import { IpropertyBase } from './ipropertybase';

export class Property implements IpropertyBase{
  Id: number;
  Name: string;
  SellRent: number;
  Transmission: string;
  Price: number;
  Model: string;
  ProdYear: number;
  Fuel: string;
  CarBody: string;
  Capacity: number;
  MechPower: number;
  Mileage: number;
  Image?: string;
  Color?: string;
  VIN?: string;
  Description?: string;
  PostedOn: string;
}
