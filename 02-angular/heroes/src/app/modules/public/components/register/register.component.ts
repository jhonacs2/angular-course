import { Component, OnInit } from '@angular/core';
import { ComponentExit } from '../../../../interfaces/component-exit.interface';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit, ComponentExit {

  constructor() {
  }

  ngOnInit(): void {
  }

  canExit(): Observable<boolean> | Promise<boolean> | boolean {
    return confirm('Do you want to leave?');
  }
}
