import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation} from '@angular/core';
import {ControlContainer, FormGroupDirective} from '@angular/forms';

@Component({
  selector: 'wl-dropdown',
  templateUrl: './dropdown.component.html',
  encapsulation: ViewEncapsulation.None,
  viewProviders: [
    {
      provide: ControlContainer,
      useExisting: FormGroupDirective,
    },
  ],
})
export class DropdownComponent {
  @Input() options: any;
  @Input() customFormGroup: any;

  @Output() handleChange = new EventEmitter<any>();

  errors: any = {};

  constructor(public controlContainer: ControlContainer) {
  }

  onChangeValue(value: any) {
    this.handleChange.emit(value);
  }
}
