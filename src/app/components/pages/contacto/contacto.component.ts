import {
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  isDevMode,
  OnDestroy,
  OnInit,
  Output,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
/* import { single } from '../../../assets/json/data'; */
import { ViewChild } from '@angular/core';
import { PrimeNGConfig, SortEvent } from 'primeng/api';
import { NgbDateStruct, NgbCalendar } from '@ng-bootstrap/ng-bootstrap';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import {
  BsDatepickerConfig,
  BsDatepickerViewMode,
} from 'ngx-bootstrap/datepicker';

import * as xml2js from 'xml2js';
import * as AOS from 'aos';

import Swal from 'sweetalert2';

import * as moment from 'moment';
import { NgxPermissionsService, NgxRolesService } from 'ngx-permissions';
import { HttpClient } from '@angular/common/http';
import { SendNotificationService } from '@app/services/send-notification.service';

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.scss']
})
export class ContactoComponent implements OnInit {
  value2: string;
  constructor( private primengConfig: PrimeNGConfig,
    private renderer: Renderer2,
    private router: Router,
    private ps: NgxPermissionsService,
    private rs: NgxRolesService,
    private http: HttpClient,
    private aformBuilder: FormBuilder,
    private sendNotificationService: SendNotificationService) { }
    aFormGroup: FormGroup;
    loading: boolean;
    formSendNotificaion: any;

  ngOnInit(): void {
    this.aFormGroup= this.aformBuilder.group({
      name:[
        "",[
          Validators.required,
        ],
      ],
      email:[
        "",[
          Validators.required,
        ],
      ],
      message:[
        "",[
          Validators.required,
        ],
      ],
      _captcha:[
        "false",[
          Validators.required,
        ],
      ],

    });
    this.aFormGroup.valueChanges.subscribe((data) =>
    data);
    this.loading=true;

  }

sendNotification(){
  console.warn(this.aFormGroup); 

  Swal.fire({
    title: "¿La información es correcta? " + '"'+ "Nombre:  " +this.aFormGroup.controls['name'].value
    +'\n'+"Email: "+this.aFormGroup.controls['email'].value+'"',
    icon: "question",
    showDenyButton: true,
    confirmButtonText: `Confirmar`,
    denyButtonText: `Cancelar`,
  }).then((result) => {
    if (result.isConfirmed) {

      //VALIDADO formulario y html variables)
      this.formSendNotificaion=this.sendNotificationService.sendNotificationPost(this.aFormGroup.value);

      
      this.formSendNotificaion.subscribe(
        (resp) => {
          Swal.fire({
            position: "center",
            icon: "success",
            title: ".....",
            showConfirmButton: false,
          }); 
          


          /* Solo entra a la siguiente consulta si se desea ver los datos antes del sistema nuevo con el sistema actual  */



          

         
        },
        (resErr) => {
          let message;
          if (resErr.status === 400)
            message = resErr.error.validation['body'].message
          else if (resErr.status === 500)
            message = resErr.error.message;
          else
            message = "Error del servidor"
          Swal.fire({
            icon: "error",
            title: message,
            showConfirmButton: false,
          }).then();
        }
      )
    } else if (result.isDenied) {
      Swal.fire("Favor de revisar la información proporcionada", "", "info");
    }
  });
}


}
