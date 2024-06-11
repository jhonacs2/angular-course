import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BasicComponent } from '../components/basic/basic.component';
import { HouseComponent } from '../components/house/house.component';
import { RequestsComponent } from '../components/requests/requests.component';
import { DirectiveExampleComponent } from '../components/directive-example/directive-example.component';

const routes: Routes = [
  {
    path: 'basic', component: BasicComponent
  },
  {
    path: 'component-communication', component: HouseComponent
  },
  {
    path: 'request', component: RequestsComponent
  },
  {
    path: 'directives', component: DirectiveExampleComponent
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'basic'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
