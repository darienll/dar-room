import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { CategoriesService } from 'src/app/shared/categories.service';
import { EMPTY } from 'rxjs';

@Injectable()
export class CategoriesEffect {
  loadCategories$ = createEffect(() => this.actions$.pipe(
    ofType('[Categories] Get All'),
    mergeMap(() => this.categoriesService.getAll()
      .pipe(
        map(categories => ({type: '[Categories] Set All', payload: categories})),
        catchError(() => EMPTY)
      )),
  ));

  constructor(
    private actions$: Actions,
    private categoriesService: CategoriesService,
  ) {}
}
