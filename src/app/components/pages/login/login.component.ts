import { Component, OnInit, NgModule, Output, EventEmitter } from '@angular/core';
import { FormsModule, NgForm, NgModel } from '@angular/forms';
import { UserModel } from '../../../models/user/user.module';
import { Router } from '@angular/router';

import { AuthService } from '../../../services/auth/auth.service';

import Swal from 'sweetalert2';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
 
  constructor(
    private router: Router,
    public user: UserModel,
    public auth: AuthService
  ) {
    
  }

  ngOnInit(): void {
    if(this.auth.isAuth())
    {
      this.router.navigateByUrl('/home');
    }
  }

  onSubmit(form: NgForm) {
    //pristine es una propiedad del formulario que indica si el formulario se conserva
    //tal cual se dio al usuario(true), si el usuario lo modifica (false)

    if (form.invalid) {
      return;
    }
    this.auth.logIn(this.user).subscribe(
      (data) => {
      
        this.router.navigateByUrl('/home');
      },
      (err) => {
        console.log(err);
        Swal.fire({
          icon: 'error',
          title: 'Error al autenticar',
          text: err.error.message,
        });
      }
    );;
    
  }
}
