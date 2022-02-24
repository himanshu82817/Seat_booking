import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatTooltipModule} from '@angular/material/tooltip';
import {MatIconModule} from '@angular/material/icon';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatCardModule} from '@angular/material/card';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import {MatExpansionModule} from '@angular/material/expansion';

import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { BookingComponent } from './booking/booking.component';
import { ReactiveFormsModule } from '@angular/forms';
import {MatDialogModule} from '@angular/material/dialog';
import {MatChipsModule} from '@angular/material/chips';
import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';


import { HttpClientModule } from '@angular/common/http';
import { MeetingsComponent } from './meetings/meetings.component';


@NgModule({
  declarations: [
   
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    AdminComponent,
    DashboardComponent,
    BookingComponent,
    MeetingsComponent,
  ],
  imports: [
    CommonModule,
    MatCardModule,
    AdminRoutingModule,
    MatInputModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSelectModule,
    MatTooltipModule,
    MatIconModule,
    ReactiveFormsModule,
    MatSnackBarModule,
    MatExpansionModule,
    MatDialogModule,
    MatChipsModule,
    MatProgressSpinnerModule
  ]
})
export class AdminModule { }
