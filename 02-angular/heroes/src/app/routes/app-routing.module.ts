import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { IsHeroGuard } from '../guards/is-hero-guard.service';

const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    loadChildren: () => import('../modules/public/public.module').then(p => p.PublicModule)
  },
  {
    path: 'heroes',
    loadChildren: () => import('../modules/private/private.module').then(p => p.PrivateModule),
    canLoad: [IsHeroGuard]
  },
  { path: '**', redirectTo: 'login' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
