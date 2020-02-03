import {Route, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { StudentListComponent } from './students/student-list/student-list.component';
// import { StudentListItemComponent } from './students/student-list-item/student-list-item.component';
// import { StudentEditItemComponent } from './students/student-edit-item/student-edit-item.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsModule } from './students/students.module';
import { FacultiesModule } from './faculties/faculties.module';


const routes: Route[] = [
  { path:'', component:  HomeComponent },
  { path:'**', component:  PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    // StudentListComponent,
    // StudentListItemComponent,
    // StudentEditItemComponent,
    HomeComponent, 
    PageNotFoundComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    StudentsModule,
    FacultiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
