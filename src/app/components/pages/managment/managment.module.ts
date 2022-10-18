import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { ManagmentComponent } from './managment.component';
import { ManagmentRoutingModule } from './managment-routing.module';
import { ManageRoleComponent } from './manage-role/manage-role.component';
import { ManageUserComponent } from './manage-user/manage-user.component';
import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';


@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        ManagmentRoutingModule
    ],
    declarations: [
        ManageRoleComponent,
        ManageUserComponent,
        ManageRolesComponent,
        ManageUsersComponent,
        ManagmentComponent,
    ],
    providers: []
})
export class ManagmentModule { } 