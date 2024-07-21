import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Subject } from 'rxjs';
import { debounceTime, map, takeUntil } from 'rxjs/operators';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild('miHumildeInput2') miHumildeInput2!: ElementRef<HTMLInputElement>;

  public simpleName: string;
  public viewChildName: string;
  public modelName: string;

  private _unsubscribe: Subject<void> = new Subject<void>();

  constructor() {
    this.simpleName = '';
    this.viewChildName = '';
    this.modelName = '';
  }

  ngOnInit(): void {
  }

  ngAfterViewInit(): void {
    // this.miHumildeInput2.nativeElement.addEventListener('change', (e) => this.inputChange(e));
    fromEvent(this.miHumildeInput2.nativeElement, 'input')
      .pipe(
        takeUntil(this._unsubscribe),
        map(value => value.target as HTMLInputElement),
        debounceTime(500)
      )
      .subscribe(inputValue => {
        this.viewChildName = inputValue.value;
      });
  }

  ngOnDestroy(): void {
    // this.miHumildeInput2.nativeElement.removeEventListener('change', (e) => this.inputChange(e));
    this._unsubscribe.next();
    this._unsubscribe.complete();
  }

  public addNumbersArray(htmlInputElement: HTMLInputElement) {
    this.simpleName = htmlInputElement.value;
  }

  public inputChange(e: Event): void {
    console.log('inputChange', e);
  }
}
