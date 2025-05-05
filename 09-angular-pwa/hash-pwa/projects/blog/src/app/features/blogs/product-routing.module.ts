import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ProductListComponent} from './components/product-list/product-list.component';
import {ProductComponent} from './components/product/product.component';

const routes: Routes = [
  {
    path: ':id',
    component: ProductComponent
  },
  {
    path: '',
    component: ProductListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ProductRoutingModule {
}
