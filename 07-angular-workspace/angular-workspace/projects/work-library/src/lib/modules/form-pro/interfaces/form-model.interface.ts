export interface IFormModel {
  group?: any[];
  controlType?: string;
  colSize?: string;
  dummyFields?: {
    options: {
      formControlName: string;
      formControlType?: 'array';
      value?: any;
    };
  }[];
  options?: {
    label?: string;
    containerClass?: string;
    placeholder?: string;
    formControlName?: string;
    value?: any;
    disabled?: boolean;
    validators?: {
      required?: boolean;
      maxLength?: number;
      pattern?: string;
    };
    errorMessage?: string;
    class?: string;
    type?: 'text';
    dropdownOptions?: any;
    optionValue?: string;
    optionLabel?: string;
    id?: number;
    rows?: number | string;
    fieldFormGroup?: string;
  };
}
