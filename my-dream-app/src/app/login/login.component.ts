import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  
  form: FormGroup;

  formSubmitted = false;

  constructor(private router: Router) { }

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
    localStorage.setItem('dar-lab-auth', this.form.value['login']);
    this.router.navigate(['/']);
  }


}
