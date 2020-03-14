import { Component, OnInit } from '@angular/core';
import { Category } from '../shared/category.types';
import { CategoriesState } from '../state/categories/categories.reducer';
import { Store, select } from '@ngrx/store';
import { getAllCategories } from '../state/categories/categories.actions';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.scss']
})
export class CategoriesComponent implements OnInit {

  constructor(private store: Store<{category: CategoriesState}>) { }

  categories: Category[] = [];

  ngOnInit(): void {
    this.store.pipe(select('category'))
      .subscribe(data => {
        this.categories = data.categories;
      });

    this.store.dispatch(getAllCategories());

  }

}
