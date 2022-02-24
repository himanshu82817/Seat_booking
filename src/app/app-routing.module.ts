import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { SignInComponent } from './components/sign-in/sign-in.component';


const routes: Routes = [
  { path:'signIn', component:SignInComponent },
  
  { path:'', redirectTo:"/signIn" ,pathMatch:"full" },
  { path: 'admin', loadChildren:()=> import('./modules/admin/admin.module').then(d=>d.AdminModule) },
  { path:'**', component:NotFoundComponent }, 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  // controllers: [SignUpController]
})
export class AppRoutingModule { }
