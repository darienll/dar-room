import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FacultyListComponent } from './faculty-list/faculty-list.component';
import { FacultyListItemComponent } from './faculty-list-item/faculty-list-item.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Route } from '@angular/router';
import { FacultyComponent } from './faculty/faculty.component';

const routes: Route[] = [
  { path: 'faculties', component: FacultyListComponent },
  { path: 'faculty/:id', component: FacultyComponent },
  { path: 'faculty', component: FacultyComponent },
]

@NgModule({
  declarations: [
    FacultyComponent,
    FacultyListComponent, 
    FacultyListItemComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(routes),
  ]
})
export class FacultiesModule { }
