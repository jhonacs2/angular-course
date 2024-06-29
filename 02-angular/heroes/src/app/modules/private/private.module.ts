import { NgModule } from '@angular/core';
import { PrivateRoutesModule } from './routes/private-routes.module';
import { MarvelService } from './services/marvel.service';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  imports: [
    PrivateRoutesModule,
    HttpClientModule
  ],
  providers: [MarvelService],
})
export class PrivateModule {
}
