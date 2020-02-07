import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss']
})
export class RegistrationComponent implements OnInit {

  form: FormGroup;

  formSubmitted = false;

  constructor(private router: Router) { }

  ngOnInit() {
    this.form = new FormGroup({
      login: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
      confirmPass: new FormControl('')
    }, 
        this.mustMatch
    );
  }
  mustMatch(fGroup: FormGroup) {
    console.log("in mustMatch");
    return fGroup.get('password').value === fGroup.get('confirmPass').value
      ? null : {'mismatch': true};
  }
  register() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    localStorage.setItem('dar-lab-auth', this.form.value['login']);
    this.router.navigate(['/']);
  }

}
