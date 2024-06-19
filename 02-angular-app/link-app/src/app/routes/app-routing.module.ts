import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'secure',
    loadChildren: () => import('../modules/public/public.module').then(p => p.PublicModule)
  },
  {
    path: 'public',
    loadChildren: () => import('../modules/secure/secure.module').then(p => p.SecureModule)
  },
  {
    path: '',
    redirectTo: 'public',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
