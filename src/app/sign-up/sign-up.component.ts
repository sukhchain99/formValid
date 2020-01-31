import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

import { User } from '../user';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {

  user = new User(18, "Username", "username@email.com", "Password123", "01/01/2020", "male");
  todaydate;
  componentProperty;
  email;
  formGroup: FormGroup;
  submitted: boolean = false;

  constructor() { }

  ngOnInit() {
    this.formGroup = new FormGroup({
      name: new FormControl(),
      email: new FormControl("", Validators.compose([
        Validators.required,
        Validators.pattern("[^ @]*@[^ @]*")
      ])),
      password: new FormControl("", this.passwordValidation),
      DOB: new FormControl(),
      gender: new FormControl()
    });
  }
  passwordValidation(formControl) {
    if (formControl.value.length < 5) {
      return { "password" : "true" };
    }
  }

  onSubmit() { this.submitted = !this.submitted; }
  onClickSubmit(data) {
    this.user = { id: 1, name:data.name, email:data.email, password:data.password, DOB:data.DOB, gender:data.gender};
  }

  get diagnostic() { return JSON.stringify(this.user); }
}
