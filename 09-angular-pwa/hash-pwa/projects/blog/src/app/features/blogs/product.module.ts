import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {ProductRoutingModule} from './product-routing.module';
import {ProductService} from './services/product.service';
import {SkeletonModule} from 'primeng/skeleton';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {PaginatorModule} from 'primeng/paginator';
import {TagModule} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';
import {ProductListComponent} from './components/product-list/product-list.component';
import { ProductComponent } from './components/product/product.component';
import {RippleModule} from 'primeng/ripple';
import {ChipsModule} from 'primeng/chips';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductComponent
  ],
  imports: [
    CommonModule,
    ProductRoutingModule,
    SkeletonModule,
    DataViewModule,
    CardModule,
    RatingModule,
    PaginatorModule,
    TagModule,
    ButtonModule,
    RippleModule,
    ChipsModule,
  ],
  providers: [
    ProductService
  ]
})
export class ProductModule {
}
