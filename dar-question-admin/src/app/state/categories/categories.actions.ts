import { createAction, props } from '@ngrx/store';
import { Category } from 'src/app/shared/category.types';

export const getAllCategories = createAction('[Categories] Get All');

export const setAllCategories = createAction(
  '[Categories] Set All',
  props<{payload: Category[]}>()
);
