import { Category } from 'src/app/shared/category.types';
import { createReducer, on } from '@ngrx/store';
import { setAllCategories } from './categories.actions';


export interface CategoriesState {
  categories: Category[];
}

export const initialState: CategoriesState = {
  categories: [],
};

const _categoriesReducer = createReducer(initialState,
  on(setAllCategories, (state, action) => ({...state, categories: action.payload}))
);

export function categoriesReducer(state, action) {
  return _categoriesReducer(state, action);
}



