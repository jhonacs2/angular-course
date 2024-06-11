import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { SonComponent } from './components/son/son.component';
import { FatherComponent } from './components/father/father.component';
import { GrandfatherComponent } from './components/grandfather/grandfather.component';
import { HouseComponent } from './components/house/house.component';
import { RequestsComponent } from './components/requests/requests.component';
import { HttpClientModule } from '@angular/common/http';
import { DirectiveExampleComponent } from './components/directive-example/directive-example.component';
import { CMonDoSomethingDirective } from './directives/c-mon-do-something.directive';
import { InputDirective } from './directives/input.directive';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SonComponent,
    FatherComponent,
    GrandfatherComponent,
    HouseComponent,
    RequestsComponent,
    DirectiveExampleComponent,
    CMonDoSomethingDirective,
    InputDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
