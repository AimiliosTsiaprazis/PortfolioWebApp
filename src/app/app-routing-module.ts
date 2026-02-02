import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {Home} from './pages/home/home';
import { About } from './pages/about/about';
import { Projects } from './pages/projects/projects';
import { Contact } from './pages/contact/contact';
import { Login } from './login/login/login';
import { AppLayout } from './layout/app-layout/app-layout';
import { AuthGuard } from './auth.guard';

const routes: Routes = [
  {path: 'login', component: Login},
  
  {
    path: '', component: AppLayout, canActivate:[AuthGuard],
    children:[
      {path: '', redirectTo: '/home', pathMatch: 'full'},
      {path: '', component:Home},
      {path: 'home', component:Home},
      {path: 'about', component:About},
      {path: 'projects', component: Projects},
      {path: 'contact', component: Contact},
      {path: '**', redirectTo: '/home'}
    ]
  },
  { path: '**', redirectTo: 'login'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
