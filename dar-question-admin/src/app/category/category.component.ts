import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CategoriesService } from '../shared/categories.service';
import { Router } from '@angular/router';
import { of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Component({
  selector: 'app-category',
  templateUrl: './category.component.html',
  styleUrls: ['./category.component.scss']
})
export class CategoryComponent implements OnInit {

  form: FormGroup;

  constructor(
    private categoriesService: CategoriesService,
    private router: Router,
  ) { }

  ngOnInit(): void {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
  }

  onSubmit() {
    for (const i in this.form.controls) {
       if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
       }
    }

    if (!this.form.valid) {
      return;
    }

    this.categoriesService.create(this.form.value)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['home', 'categories']);
        }
      });
  }

}
