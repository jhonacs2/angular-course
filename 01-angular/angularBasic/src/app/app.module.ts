import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { BasicComponent } from './components/basic/basic.component';
import { AppRoutingModule } from './routes/app-routing.module';
import { SonComponent } from './components/son/son.component';
import { FatherComponent } from './components/father/father.component';
import { GrandfatherComponent } from './components/grandfather/grandfather.component';
import { HouseComponent } from './components/house/house.component';

@NgModule({
  declarations: [
    AppComponent,
    BasicComponent,
    SonComponent,
    FatherComponent,
    GrandfatherComponent,
    HouseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
