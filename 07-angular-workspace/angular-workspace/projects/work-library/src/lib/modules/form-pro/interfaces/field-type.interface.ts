import {Type} from '@angular/core';
import {IDynamicField} from './dynamic-field.interface';

export interface IFieldType {
  type: string;
  component: Type<IDynamicField>;
}
