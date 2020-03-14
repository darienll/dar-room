import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Category } from './category.types';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriesService {

  host = 'http://localhost:8080';

  constructor(private httpClient: HttpClient) {}

  getAll(): Observable<Category[]> {
    return this.httpClient.get<Category[]>(`${this.host}/categories`);
  }

  create(category: Category) {
    return this.httpClient.post<Category>(`${this.host}/categories`, category);
  }
}
