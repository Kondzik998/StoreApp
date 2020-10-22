import { IpropertyBase } from './ipropertybase';

export interface IProperty extends IpropertyBase{
  Color: string;
  VIN: string;
  Description: string;
}
