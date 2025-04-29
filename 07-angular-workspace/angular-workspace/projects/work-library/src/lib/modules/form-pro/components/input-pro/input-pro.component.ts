import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroup, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'lib-input-pro',
  templateUrl: './input-pro.component.html',
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush,
  viewProviders: [
    {
      provide: ControlContainer,
      useClass: FormGroupDirective
    }
  ]
})
export class InputProComponent {
  @Input() options: any;
  @Input() customFormGroup: any;

  errors: any = {};

  constructor(public controlContainer: ControlContainer) {
  }

  onChange(event: Event): void {
    const formGroup = this.controlContainer.control as FormGroup;

    this.errors = formGroup.controls[this.options.formControlName].errors;
    if (this.errors) {
      this.errors.errorMessage = this.options?.errorMessage;
    }
  }
}
