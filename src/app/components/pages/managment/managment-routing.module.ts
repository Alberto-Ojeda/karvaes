import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ManageRolesComponent } from './manage-roles/manage-roles.component';
import { ManageUsersComponent } from './manage-users/manage-users.component';
import { ManagmentComponent } from './managment.component';

const managmentRoutes: Routes = [
	{ 
	  path: 'managment',
          component: ManagmentComponent,

          children: [
            { path: 'manage-roles', component: ManageRolesComponent  },
            { path: 'manage-users', component: ManageUsersComponent  }
          ]
	}  
];

@NgModule({
  imports: [ RouterModule.forChild(managmentRoutes) ],
  exports: [ RouterModule ]
})
export class ManagmentRoutingModule{ } 