import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRestService } from '../shared/auth-rest.service';
import { User } from '../shared/user.types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;

  formSubmitted = false;

  constructor(
    private router: Router,
    private authRestService: AuthRestService,
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required)
    });
  }
  login() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    const newUser: User = {
      username: this.form.get('login').value,
      password: this.form.get('password').value,
    }
    this.authRestService.logIn(newUser)
      .subscribe(resp => {
        console.log('in request')
        if(resp) {
          localStorage.setItem('dar-lab-auth', resp.token);
          this.router.navigate(['/']);
        }
      
      },
      (err) => (alert(err.error.error))
      )
  
  }


}
