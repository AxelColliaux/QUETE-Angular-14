import { Component } from '@angular/core';
import { FormControl } from '@angular/forms';
import { User } from '../models/user';
import { Adress } from '../models/adress';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent {

  user!: User;
  address!: Adress;

  username: FormControl = new FormControl('');
  email: FormControl = new FormControl('');
  password: FormControl = new FormControl('');
  street: FormControl = new FormControl('');
  postalCode: FormControl = new FormControl('');
  city: FormControl = new FormControl('');
  
  onSubmit(){  
    this.user = new User("", "", "", new Adress("", "", ""));
    this.user.username = this.username.value;
    this.user.email = this.email.value;
    this.user.password = this.password.value;
    this.user.address.street = this.street.value;
    this.user.address.postalCode = this.postalCode.value;
    this.user.address.city = this.city.value;
  }
}
