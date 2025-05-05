import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'blogs',
    loadChildren: () => import('./features/blogs/blogs.module').then(m => m.BlogsModule)
  },
  {path: '', redirectTo: '/blogs', pathMatch: 'full'},
  {path: '**', redirectTo: '/blogs'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
