import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SignUpComponent } from 'src/app/components/sign-up/sign-up.component';
import { AdminComponent } from './admin/admin.component';
import { BookingComponent } from './booking/booking.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { FooterComponent } from './footer/footer.component';
import { MeetingsComponent } from './meetings/meetings.component';

const routes: Routes = [
  { path:'',component:AdminComponent,
  
  children:[
     {path:'',component:DashboardComponent},
     {path:'booking',component:BookingComponent},
     {path:'meetings',component:MeetingsComponent},
     {path:'signup',component:SignUpComponent},
      

  ] 
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
