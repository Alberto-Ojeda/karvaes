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
    private http: HttpClient) { }

  ngOnInit(): void {
  }

}
