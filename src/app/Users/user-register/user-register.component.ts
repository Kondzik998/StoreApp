import { Component, OnInit } from '@angular/core';
import { FormsModule, FormGroup, FormControl, Validators, FormBuilder } from '@angular/forms';
import { User } from 'src/app/model/user';
import { UserService } from 'src/app/services/user.service';
import { AlertifyService } from 'src/app/services/alertify.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css']
})
export class UserRegisterComponent implements OnInit {

  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(private fb: FormBuilder, private userService: UserService, private alertify: AlertifyService) { }

  ngOnInit() {
    // this.registerationForm = new FormGroup({
    //   userName: new FormControl(null, [Validators.required, Validators.minLength(5)]),
    //   email: new FormControl(null, [Validators.email, Validators.required ]),
    //   password: new FormControl(null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]),
    //   confirmPassword: new FormControl(null, [Validators.required]),
    //   mobile: new FormControl(null, [Validators.maxLength(9), Validators.required])
    // }, this.passValidator);
    this.createRegisterationForm();
  }

createRegisterationForm(){
  this.registerationForm = this.fb.group({
    userName: [null, [Validators.required, Validators.minLength(5)]],
    email: [null, [Validators.email, Validators.required]],
    password: [null, [Validators.required, Validators.minLength(8), Validators.maxLength(20)]],
    confirmPassword: [null, Validators.required],
    mobile: [null, [Validators.maxLength(9), Validators.required]]
  }, {validators: this.passValidator});
  }

  onSubmit()
  {
    this.userSubmitted = true;
    console.log(this.registerationForm.value);
    if (this.registerationForm.valid)
    {
      // this.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser((this.userData()));
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertify.success('Zostałeś zarejestrowany!');
    }
    else{
      this.alertify.error('Nie udalo sie zarejestrować!');
      this.registerationForm.reset();
    }
  }

  userData(): User {
    return this.user = {
      userName: this.userName.value,
      email: this.email.value,
      password: this.password.value,
      mobile: this.mobile.value
    };
  }


  get userName(){
    return this.registerationForm.get('userName') as FormControl;
  }

  get email(){
    return this.registerationForm.get('email') as FormControl;
  }

  get password(){
    return this.registerationForm.get('password') as FormControl;
  }

  get confirmPassword(){
    return this.registerationForm.get('confirmPassword') as FormControl;
  }

  get mobile(){
    return this.registerationForm.get('mobile') as FormControl;
  }
  passValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value ? null : {notmatched: true};
  }

}
