import { NgModule } from '@angular/core';
import { PublicRoutesModule } from './routes/public-routes.module';
import { RegisterComponent } from './components/register/register.component';


@NgModule({
  declarations: [
    RegisterComponent
  ],
  imports: [PublicRoutesModule]
})
export class PublicModule {
}
