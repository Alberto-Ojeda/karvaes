import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

//Http Requests
import { HttpClientModule, HttpHeaders, HTTP_INTERCEPTORS } from '@angular/common/http';
//Services

//Models
import { UserModel } from './models/user/user.module';

//Installed extra modules
import { NgxChartsModule } from '@swimlane/ngx-charts';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PortalModule } from '@angular/cdk/portal';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { DataTablesModule } from 'angular-datatables';
// RECOMMENDED
import { BsDatepickerModule } from 'ngx-bootstrap/datepicker';



//Routes
import { AppRoutingModule } from './app-routing.module';

//Interceptors
import { AuthInterceptor } from './interceptors/auth.interceptor';

//Pages and single components
import { AppComponent } from './app.component';

import { LoginComponent } from './components/pages/login/login.component';

import { HeaderComponent } from './components/shared/header/header.component';
import { FooterComponent } from './components/shared/footer/footer.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { WebdatarocksComponent } from "./components/shared/Webdatarocks/webdatarocks.component";
import { ScrollTopComponent } from './components/shared/scrolltop/scrolltop.component';
import { ProfileComponent } from './components/shared/profile/profile.component';

import { HomeComponent } from './components/pages/home/home.component';
import { MantainanceComponent } from './components/pages/mantainance/mantainance.component';
import { HeroeComponent } from './components/pages/heroe/heroe.component';
import { ManageRoleComponent } from './components/pages/managment/manage-role/manage-role.component';
import { ManageUserComponent } from './components/pages/managment/manage-user/manage-user.component';
import { ManageRolesComponent } from './components/pages/managment/manage-roles/manage-roles.component';
import { ManageUsersComponent } from './components/pages/managment/manage-users/manage-users.component';


import { AccordionModule } from 'primeng/accordion';     //accordion and accordion tab
import { TableModule } from 'primeng/table';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { DialogModule } from 'primeng/dialog';
import { ButtonModule } from 'primeng/button';
import { DropdownModule } from 'primeng/dropdown';
import { ProgressBarModule } from 'primeng/progressbar';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { InputTextModule } from 'primeng/inputtext';
import { TooltipModule } from 'primeng/tooltip';


import { MenuItem } from 'primeng/api';

import { NgxPermissionsModule } from 'ngx-permissions';
import { ManagmentComponent } from './components/pages/managment/managment.component';
import { ManagmentRoutingModule } from './components/pages/managment/managment-routing.module';
import { ManagmentModule } from './components/pages/managment/managment.module';


import {RouterModule} from '@angular/router';
import { MessageModule } from 'primeng/message';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenubarModule } from 'primeng/menubar';
import { PresentationComponent } from './components/shared/presentation/presentation.component';

import { CardModule } from 'primeng/card';
import { ContactoComponent } from './components/pages/contacto/contacto.component';
import {GMapModule} from 'primeng/gmap';
import { MapsComponent } from './components/pages/maps/maps.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    LoginComponent,
    HeroeComponent,
    MantainanceComponent,
    WebdatarocksComponent,
    SpinnerComponent,
    ScrollTopComponent,
    ProfileComponent,
    PresentationComponent,
    ContactoComponent,
    MapsComponent

  ],
  imports: [
    CardModule,
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ManagmentModule,
    FontAwesomeModule,
    DataTablesModule,
    FormsModule,
    ReactiveFormsModule,
    NgxChartsModule,
    BrowserAnimationsModule,
    PortalModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    NgxPermissionsModule.forRoot(),
    AccordionModule,
    TableModule,
    CalendarModule,
    SliderModule,
    DialogModule,
    MultiSelectModule,
    ContextMenuModule,
    DropdownModule,
    ButtonModule,
    ToastModule,
    InputTextModule,
    ProgressBarModule,
    ProgressSpinnerModule,
    TooltipModule,
    TabMenuModule,
    MessageModule,
    MenubarModule,
    ButtonModule,
    DialogModule,
    GMapModule
    
    
    
  ],
  providers: [UserModel,  {
    provide: HTTP_INTERCEPTORS,
    useClass: AuthInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  exports: [
    BsDatepickerModule,
    NgxPermissionsModule
  ]
})
export class AppModule { }
