import { Component, OnInit } from '@angular/core';
import {COMMA, ENTER} from '@angular/cdk/keycodes';
import {MatChipInputEvent} from '@angular/material/chips';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DatePipe } from '@angular/common';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-meetings',
  templateUrl: './meetings.component.html',
  styleUrls: ['./meetings.component.css']
})
export class MeetingsComponent implements OnInit {
  formControl = new FormControl();
  myFormGroup: FormGroup;
  constructor(public formBuilder: FormBuilder,
              public bookingServices:BookingService
              ) {this.myFormGroup = this.formBuilder.group({
                  emails:['',Validators.email],
                  exNo:['',[Validators.max(531),Validators.min(101)]],
                  teamHead:['',Validators.required],
                  start_time: ['',Validators.required],
                  end_time: ['',Validators.required],
                  start_date: ['',Validators.required],
                  end_date: ['',Validators.required],
              }) }

  progress = false
  submitForm(value){
    if(this.myFormGroup.valid){
      this.progress = true
      
      let submitData = {
        email:this.mails,
        extentionNumber: Number(value.exNo),
        TeamHead: value.teamHead,
        startTime: value.start_time,
        endTime: value.end_time,
        fromDate: new DatePipe('en-Us').transform(value.start_date, 'YYYY/MM/dd'),
        toDate: new DatePipe('en-Us').transform(value.end_date, 'YYYY/MM/dd'),
        
      }
      // console.log(submitData)
      this.bookingServices.bookMeeting(submitData).subscribe(x=>{
        
        if (x.status===true) {
          this.progress = false
          Swal.fire({
            text: `${x.message}`,
            icon: 'success',
  
          })
        }else{
          this.progress = false
          Swal.fire({
  
            text: `${x.message}`,
            icon: 'warning',
  
          })
        }
  
  
  
        // console.log(x)
      }, err => {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `Something went wrong!`,
        })
  
        console.log(err)
      
      })
    }else{
      Swal.fire({
        icon: 'error',
        title: '',
        text: `Enter valid values`,
      })
    }
  }

  ngOnInit(): void {
  }
  addOnBlur = true;
  mails = []
  readonly separatorKeysCodes = [ENTER,COMMA] as const;
  add(event: MatChipInputEvent): void{
    const value = (event.value || '').trim();
    if (value) {
      this.mails.push(value);
      event.chipInput!.clear();
    }
  }
  remove(mail): void {
    const index = this.mails.indexOf(mail);

    if (index >= 0) {
      this.mails.splice(index, 1);
    }
  }
}
