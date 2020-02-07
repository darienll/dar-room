import {Route, RouterModule} from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms'
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { StudentsModule } from './students/students.module';
import { AuthGuard } from './shared/auth.guard';
import {} from './shared/auth.guard';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegistrationComponent } from './registration/registration.component'

const routes: Route[] = [
  { path: '', 
    component: DashboardComponent,
    canActivate: [AuthGuard], 
    children: [
      { path:'', component:  HomeComponent },
      { path:'faculties',
        loadChildren : () => import('./faculties/faculties.module').then(m => m.FacultiesModule)
      },
      {
        path: 'students',
        loadChildren : () => import('./students/students.module').then(m => m.StudentsModule)
      },  
    ]
  },
  { path: 'login', component: LoginComponent },
  { path: 'registration', component: RegistrationComponent },
  { path:'**', component:  PageNotFoundComponent },
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent, 
    PageNotFoundComponent,
    LoginComponent,
    DashboardComponent,
    RegistrationComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes),
    // StudentsModule,
    // FacultiesModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
