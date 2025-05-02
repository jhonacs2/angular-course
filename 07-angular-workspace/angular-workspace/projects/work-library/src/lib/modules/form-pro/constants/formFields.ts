import {IFieldType} from '../interfaces/field-type.interface';
import {CheckboxComponent, DropdownComponent, InputProComponent, TextAreaProComponent} from '../components';

export const FORM_FIELDS: IFieldType[] = [
  {
    type: 'input',
    component: InputProComponent
  },
  {
    type: 'dropdown',
    component: DropdownComponent
  },
  {
    type: 'checkbox',
    component: CheckboxComponent
  },
  {
    type: 'texta',
    component: TextAreaProComponent
  }
];
