import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, finalize } from 'rxjs/operators';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Injectable({
  providedIn: 'root',
})
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router) {}
  pendingRequestsCount = 0;
  intercept(
    req: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    this.pendingRequestsCount++;
    const token: string = localStorage.getItem('token');

    let request = req;

    //console.log(req)
    
    Swal.fire({
      title: 'CARGANDO',
      allowEscapeKey: false,
      allowOutsideClick: false,
      onOpen: () => {
    Swal.showLoading();
      }
    });

    return next.handle(request).pipe(
      finalize(() => {
        this.pendingRequestsCount--;
       //console.log(this.pendingRequestsCount);
        if ((this.pendingRequestsCount == 0)) {
          Swal.close();
        }
       
      }),
      catchError((err: HttpErrorResponse) => {
       
     
        Swal.close();
        if (err.status === 401) {
          this.router.navigateByUrl('/login');
        }
      
        if ((this.pendingRequestsCount == 0)) {
           console.log(this.pendingRequestsCount);
          Swal.close();
        }
        return throwError(err);
      })
    );
  }
}
