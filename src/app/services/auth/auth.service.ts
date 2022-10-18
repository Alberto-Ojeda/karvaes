import { EventEmitter, Injectable, isDevMode, Output } from '@angular/core';
import {
  HttpClient,
  HttpInterceptor,
  HttpEvent,
  HttpHandler,
  HttpRequest,
  HttpHeaders,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { UserModel } from '../../models/user/user.module';
import { JwtHelperService } from '@auth0/angular-jwt';
import { environment } from '@environments/environment';
import { Router } from '@angular/router';


import Swal from 'sweetalert2';
import { catchError, finalize, tap } from 'rxjs/operators';
import { NgxRolesService } from 'ngx-permissions';
import { isNull } from '@angular/compiler/src/output/output_ast';

const OPTIONS = {
  reportProgress: true,
  headers: new HttpHeaders({ 'Content-Type': 'application/json' }),
};
const helper = new JwtHelperService();
@Injectable()
export class AuthService {
  @Output() getUserLoggedInData: EventEmitter<any> = new EventEmitter();
  hasUser: boolean = false;

  /*   const options= {
    headers?: HttpHeaders | {[header: string]: string | string[]},
    observe?: 'body' | 'events' | 'response',
    params?: HttpParams|{[param: string]: string | string[]},
    reportProgress?: boolean,
    responseType?: 'arraybuffer'|'blob'|'json'|'text',
    withCredentials?: boolean,
  } */

  constructor(private http: HttpClient, private router: Router, private rs:NgxRolesService) {
    //this.getToken();
  }

  isAuth() {
    //Token decodificado
    let decodedToken = this.getTokenData();
    if (decodedToken) {
      this.getUserLoggedInData.emit(decodedToken);
      this.hasUser = true;
      //Hacemos la carga del rol con sus respectivos permisos
        //Rol y permisos provenientes desde la base de datos
        this.getLoggedUserPermissions(decodedToken.username).subscribe((data)=>{
          console.log(data)
          this.rs.addRoleWithPermissions(data.payload.role, data.payload.permissions);
        });
       
    } else {
      this.getUserLoggedInData.emit();
      this.hasUser = false;
    }
    return this.hasUser;
  }

  getLoggedUserPermissions(username): Observable<any>{
    console.log(`${environment.apiUrl}user/${username}/permissions`)
    return this.http
    .get(`${environment.apiUrl}user/admin/permissions`, OPTIONS)
    .pipe(tap(data=>{
      
     return data;
    }),
    catchError((err: HttpErrorResponse) => {
     
      return throwError(err);
    }))
    
  }

    

  saveToken(data) {
    let successfullySavedToken=false;
    let encodedToken = data.payload;

    //Hace falta que regrese los demas datos
    localStorage.setItem('token', encodedToken);

   
    if (this.getTokenData()) {
      successfullySavedToken=true;
    }
    return successfullySavedToken;

  }

  getTokenData() {
    let decodedToken;
    //Validamos el tiempo de expiracion del token
    if (localStorage.getItem('token')) {
      let encodedToken = localStorage.getItem('token');
      //Decodificacion del token
      decodedToken = helper.decodeToken(encodedToken);
      let timeReamingJWT =
        decodedToken.exp - Math.floor(new Date().getTime() / 1000.0);

      if (timeReamingJWT <= 0) {
        localStorage.removeItem('token');
        decodedToken = null;
      }
    } else {
      decodedToken = null;
    }
    return decodedToken;
  }

  logIn(user: UserModel) {
    

    return this.http
      .post(`${environment.apiUrl}user/login`, JSON.stringify(user), OPTIONS)
      .pipe(tap(data=>{
        
        return this.saveToken(data);
       
      }),
      catchError((err: HttpErrorResponse) => {
       
        return throwError(err);
      }))
      
  }

  logOut() {

    let successfullyRemovedToken = false;

    localStorage.removeItem('token');
    if (localStorage.getItem('token') === null) {
      successfullyRemovedToken = true;
    }

    return successfullyRemovedToken;

  }
}
