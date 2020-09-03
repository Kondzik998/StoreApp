import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  constructor() { }

  ngOnInit() {
    this.registerationForm = new FormGroup({
      userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
      email: new FormControl(null, [Validators.email, Validators.required ]),
      password: new FormControl(null, [Validators.required, Validators.minLength(8)]),
      confirmPassword: new FormControl(null, [Validators.required]),
      mobile: new FormControl(null, [Validators.maxLength(9), Validators.required])
    }, this.emailValidator);
  }

  onSubmit()
  {
    console.log(this.registerationForm);
  }

  passChecker()
  {
    // tslint:disable-next-line: triple-equals
    if (this.registerationForm.value.password != this.registerationForm.value.confirmPassword) {
    alert('kurwa źle!');
    }
  }

  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }

  emailValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched : true};
  }
}
