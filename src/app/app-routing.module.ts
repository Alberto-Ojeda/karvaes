import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/pages/home/home.component';
import { LoginComponent } from './components/pages/login/login.component';
import { AboutComponent } from './components/pages/about/about.component';
import { HeroeComponent } from './components/pages/heroe/heroe.component';
import { AuthGuard } from './guards/auth.guard';
import { MantainanceComponent } from './components/pages/mantainance/mantainance.component';
import { ProfileComponent } from './components/shared/profile/profile.component';
import { ManagmentComponent } from './components/pages/managment/managment.component';

//En todos los componentes que tengan el canActivate se mostrara la barra de navegacion
const routes: Routes = [
  { path: 'managment', component: ManagmentComponent ,
    loadChildren: './components/pages/managment/managment.module#ManagmentModule'
  },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'profile', component: ProfileComponent, canActivate: [AuthGuard] },
  

  
  { path: 'about', component: AboutComponent },
  { path: 'mantainance', component: MantainanceComponent },
  { path: 'heroe/:id', component: HeroeComponent, canActivate: [] },
  { path: '**', pathMatch: 'full', redirectTo: 'login' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule { }
