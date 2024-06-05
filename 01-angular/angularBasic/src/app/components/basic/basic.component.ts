import { AfterViewChecked, AfterViewInit, Component, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-basic',
  template: `
    <section>
      <h1>{{ title }}</h1>
      <div [ngStyle]="{'background':backgroundColor}">
        <input type="text" [value]="password">
        <button (click)="generatePassword()">Generate Password</button>
      </div>
    </section>
  `,
  styleUrls: ['./basic.component.scss']
})
export class BasicComponent implements OnInit, OnChanges, AfterViewInit, AfterViewChecked, OnDestroy {

  title = 'Insecure Password Generator';
  password: string = '123456789';
  backgroundColor = 'red';

  generatePassword(): void {
    let newPassword = '';
    const characters = '0123456789';
    for (let i = 0; i < 10; i++) {
      const randomIndex = Math.floor(Math.random() * 10);
      newPassword += characters[randomIndex];
    }
    this.password = newPassword;
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges', changes);
  }

  ngOnInit(): void {
    console.log('ngOnInit: Component initialisation');
  }

  /*  ngDoCheck(): void {
      console.log('ngDoCheck: a customised change detection in your component.');
    }

    ngAfterContentInit(): void {
      console.log(`ngAfterContentInit: content projection <ng-content>`);
    }

    ngAfterContentChecked(): void {
      console.log('ngAfterContentChecked: This method is called after each verification of changes to the projected content of a component,');
    }*/

  ngAfterViewInit(): void {
    console.log('ngAfterViewInit: rendering after views and secondary views');
  }

  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked: AfterViewChecked');
  }

  ngOnDestroy(): void {
    console.log('ngOnDestroy: we can perform actions when destroying the component');
  }
}

/*•
• {{}} for interpolation
• [] for property binding
• () for event binding
• # for variable declaration
*/
