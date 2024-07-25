import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FatherComponent } from './components/father/father.component';
import { SonComponent } from './components/son/son.component';
import { InnocentComponent } from './components/innocent/innocent.component';

@NgModule({
  declarations: [
    AppComponent,
    FatherComponent,
    SonComponent,
    InnocentComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
