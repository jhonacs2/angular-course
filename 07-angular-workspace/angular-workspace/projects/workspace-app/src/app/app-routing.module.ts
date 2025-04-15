import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: 'board',
    loadChildren: () => import('./components/board/board.module').then(m => m.BoardModule)
  },
  {
    path: 'series',
    loadChildren: () => import('./components/series-view/series.module').then(m => m.SeriesModule)
  },
  {
    path: 'library',
    loadChildren: () => import('./components/library-view/library.module').then(m => m.LibraryModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
