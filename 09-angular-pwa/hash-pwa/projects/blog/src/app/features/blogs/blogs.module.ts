import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {BlogComponent} from './blog/blog.component';
import {BlogsRoutingModule} from './blogs-routing.module';
import {ProductService} from './services/product.service';
import {SkeletonModule} from 'primeng/skeleton';
import {DataViewModule} from 'primeng/dataview';
import {CardModule} from 'primeng/card';
import {RatingModule} from 'primeng/rating';
import {PaginatorModule} from 'primeng/paginator';
import {TagModule} from 'primeng/tag';
import {ButtonModule} from 'primeng/button';


@NgModule({
  declarations: [
    BlogComponent
  ],
  imports: [
    CommonModule,
    BlogsRoutingModule,
    SkeletonModule,
    DataViewModule,
    CardModule,
    RatingModule,
    PaginatorModule,
    TagModule,
    ButtonModule,
  ],
  providers: [
    ProductService
  ]
})
export class BlogsModule {
}
