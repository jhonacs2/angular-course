import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'wl-checkbox',
  templateUrl: './checkbox.component.html',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class CheckboxComponent {
  errors: any = {};

  @Input() options: any;
  @Input() customFormGroup: any;

  constructor(public controlContainer: ControlContainer) {
  }

  onChange(event: Event) {
    const formGroup = this.controlContainer.control as FormGroup;

    this.errors = formGroup.controls[this.options.formControlName].errors;
  }
}
