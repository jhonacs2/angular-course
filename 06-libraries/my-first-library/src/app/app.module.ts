import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DsUiCoreModule } from '../../projects/ds-ui-core/src/lib/ds-ui-core.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    DsUiCoreModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
