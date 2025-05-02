import {
  ChangeDetectionStrategy,
  Component,
  ComponentFactoryResolver,
  Input,
  OnInit,
  Type,
  ViewChild,
  ViewContainerRef,
  ViewEncapsulation
} from '@angular/core';
import {FormProService} from '@work/library';
import {IFieldType} from '../../interfaces/field-type.interface';
import {IDynamicField} from '../../interfaces/dynamic-field.interface';
import {IFormModel} from '../../interfaces/form-model.interface';

@Component({
  selector: 'wl-form-core',
  templateUrl: './form-core.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class FormCoreComponent implements OnInit {
  @ViewChild('appDynamic', {read: ViewContainerRef, static: true})
  private dynamicHost!: ViewContainerRef;

  @Input() field!: IFormModel;

  constructor(private _formFactoryService: FormProService,
              private _componentFactoryResolver: ComponentFactoryResolver) {
  }

  ngOnInit(): void {
    this._initialize();
  }

  private _initialize(): void {
    if (this.field.dummyFields) {
      return;
    }
    this.dynamicHost.clear();
    if (this.field.controlType) {
      const component = this._componentFactoryResolver.resolveComponentFactory(this.componentTypeFactory(this.field.controlType));
      const componentRef = this.dynamicHost?.createComponent<IDynamicField>(component);
      componentRef.instance.options = this.field.options;
    }
  }

  private componentTypeFactory(type: string): Type<IDynamicField> {
    const field: IFieldType = this._formFactoryService.formFields.filter((field: IFieldType) => field.type === type)[0];
    return field.component;
  }
}
