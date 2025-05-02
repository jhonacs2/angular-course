import {Injectable} from '@angular/core';
import {IFieldType} from '../interfaces/field-type.interface';
import {FORM_FIELDS} from '../constants/formFields';
import {FormArray, FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {IFormModel} from '../interfaces/form-model.interface';

@Injectable()
export class FormProService {
  private _formFields: IFieldType[] = FORM_FIELDS;

  constructor(private _fb: FormBuilder) {
    // this._formFields = this.formFields.concat(config.fields);
  }

  get formFields(): IFieldType[] {
    return this._formFields;
  }

  createForm(formFields: IFormModel[]): FormGroup {
    const form: FormGroup = this._fb.group({});
    let validators: any[];
    console.log(formFields);
    const createField = (singleField: any) => {
      validators = [];
      let newControl;
      if (singleField.options) {
        if (singleField.options.formControlType === 'array') {
          newControl = new FormArray([]);
        } else {
          newControl = new FormControl({
            value: singleField.options?.value ?? '',
            disabled: singleField.options?.disabled && true,
          });
        }
        if (singleField.options?.validators?.pattern) {
          validators.push(
            Validators.pattern(singleField.options?.validators?.pattern)
          );
        }
        if (singleField.options?.validators?.required) {
          validators.push(Validators.required);
        }
        if (singleField.options?.validators?.maxLength) {
          validators.push(
            Validators.maxLength(singleField.options?.validators?.maxLength)
          );
        }

        newControl.setValidators(validators);
        form.addControl(singleField.options.formControlName, newControl);
      }
    };
    formFields.forEach((field: any) => {
      console.log(field);
      if (field.dummyFields) {
        field.dummyFields.forEach((dummyField: any) => {
          createField(dummyField);
        });
      }
      if (field.group) {
        field.group.forEach((singleField: any) => {
          createField(singleField);
        });
      } else {
        createField(field);
      }
    });

    return form;
  }

  getFormGroup(form: FormGroup, field: string): FormGroup {
    return form.get(field) as FormGroup;
  }
}
