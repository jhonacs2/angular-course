import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {CategoryService} from './services/category.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {
  title = 'reactive-programming';

  constructor(private _categoryService: CategoryService) {
  }

  ngOnInit(): void {
    this._categoryService.getCategories().subscribe((response) => {
      console.log(response);
    });
  }
}
