import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthRestService } from '../shared/auth-rest.service';
import { User } from '../shared/user.types';
import { LoginComponent } from '../login/login.component';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  formSubmitted = false;

  constructor(
    private router: Router,
    private authRestService: AuthRestService,
    ) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      firstName: new FormControl(''),
      lastName: new FormControl(''),
      confirmPass: new FormControl('')
    }, 
        this.mustMatch
    );
  }
  mustMatch(fGroup: FormGroup) {
    return fGroup.get('password').value === fGroup.get('confirmPass').value
      ? null : {'mismatch': true};
  }
  login(user: User) {
    this.authRestService.logIn(user)
      .subscribe(resp => {
        if(resp) {
          localStorage.setItem('dar-lab-auth', resp.token);
          this.router.navigate(['/']);
        }
      
      },
      (err) => (alert(err.error.error))
      )
  }
  register() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    const newUser: User = {
      username: this.form.get('login').value,
      password: this.form.get('password').value,
      firstName: this.form.get('firstName').value,
      lastName: this.form.get('lastName').value
    }
    this.authRestService.signUp(newUser)
      .subscribe(user => {
        if (user) {
           this.login(newUser);
        }
      })
    
  }

}
