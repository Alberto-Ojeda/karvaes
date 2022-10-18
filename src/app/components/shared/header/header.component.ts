import { AfterContentInit, Component, OnInit, isDevMode } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../../services/auth/auth.service';
import { UserModel } from '../../../models/user/user.module';
import { faCoffee } from '@fortawesome/free-solid-svg-icons';
import { OnDestroy } from '@angular/core';
import { NgxRolesService } from 'ngx-permissions';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit, OnDestroy {

  hasUser: boolean = false;

  constructor(
    private user: UserModel,
    private router: Router,
    private auth: AuthService,
    private rs: NgxRolesService
  ) {
    if(isDevMode())console.log(this.router);
    
    this.auth.getUserLoggedInData.subscribe((data) => {
      if(isDevMode())console.log(data)
      if (data) {
        this.user.username = data.username;
        this.user.firstName = data.firstName;
        this.user.middleName = data.middleName;
        this.user.lastName = data.lastName;
        this.user.role = data.role;
        this.user.roleId = data.roleId;
        this.hasUser = true;
       
      } else {
        this.hasUser = false;
      }

    });
    /* 
    if (this.auth.isAuth()) {
      let dataToken = this.auth.getTokenData();

      this.user.username = dataToken.username;
      this.user.name = dataToken.name;
      this.user.lastName = dataToken.lastName;
      this.hasUser = true;
      console.log(this.user);
    } */
  }

  ngOnInit(): void {
    if(isDevMode())console.log('cargando navbar');
  }

  ngOnDestroy(): void {
    // Do not forget to unsubscribe the event
    this.auth.getUserLoggedInData.unsubscribe();
  }

  logOut() {
    this.auth.getUserLoggedInData.unsubscribe();
    this.hasUser = false;
    this.auth.logOut();
  }
}
