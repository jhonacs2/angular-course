import { Routes } from '@angular/router';
import { LoginComponent } from './components/public/login/login.component';
import { StarkTowerComponent } from './components/secure/stark-tower/stark-tower.component';

export const routes: Routes = [
  { path: '', redirectTo: '/login', pathMatch: 'full' },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'heroes',
    children: [
      { path: '', redirectTo: 'tower', pathMatch: 'full' },
      {
        path: 'tower',
        component: StarkTowerComponent,
        children: [
          {
            path: '',
            loadComponent: () => import('./components/secure/hero-details/hero-details.component')
              .then(c => c.HeroDetailsComponent)
          },
          {
            path: 'team',
            loadComponent: () => import('./components/secure/team-heroes/team-heroes.component')
              .then(c => c.TeamHeroesComponent)
          }
        ]
      }
    ]
  }
];
