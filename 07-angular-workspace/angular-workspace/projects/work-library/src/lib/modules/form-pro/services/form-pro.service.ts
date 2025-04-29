import {Injectable} from '@angular/core';
import {IFieldType} from '../interfaces/field-type.interface';

@Injectable()
export class FormProService {
  private formFields: IFieldType[] = [];

  constructor() {
  }
}
