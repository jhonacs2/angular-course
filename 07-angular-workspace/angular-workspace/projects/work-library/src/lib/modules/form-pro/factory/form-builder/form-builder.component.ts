import {ChangeDetectionStrategy, Component, Input, ViewEncapsulation} from '@angular/core';
import {FormGroup} from '@angular/forms';

@Component({
  selector: 'wl-form-builder',
  templateUrl: './form-builder.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FormBuilderComponent {
  @Input() form!: FormGroup;
  @Input() fields: any;
  @Input() styleClass!: string;
}
