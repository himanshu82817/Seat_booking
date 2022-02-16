import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  formControl = new FormControl();
  myFormGroup: FormGroup;
  constructor(public formBuilder: FormBuilder,
    private bookingServices: BookingService) {
    this.myFormGroup = this.formBuilder.group({
      floor: ['',Validators.required],
      exNo: ['',[Validators.max(531),Validators.min(101)]],
      start_time: ['',Validators.required],
      end_time: ['',Validators.required],
      start_date: ['',Validators.required],
      end_date: ['',Validators.required],
      work_type: ['Office',Validators.required],
      seat_type: ['',Validators.required],
    })
  }

  seatDetails = {
    floor: '',
    exNo: '',
    seat_type: ''
  }
  submitForm(value) {
    if(this.myFormGroup.valid){
      let timerInterval
      Swal.fire({
        // title: 'Auto close alert!',
        html: 'Booking in progress...',
        timer: 2000,
        timerProgressBar: true,
        didOpen: () => {
          Swal.showLoading()
          const b: any = Swal.getHtmlContainer().querySelector('b')
          timerInterval = setInterval(() => {
            b.textContent = Swal.getTimerLeft()
          }, 10000)
        },
        willClose: () => {
          clearInterval(timerInterval)
        }
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          Swal.fire({
            icon: 'success',
            // title: 'Oops...',
            text:'Seat Booked',
          })
        }
      })

    let submitData = {
      floor: value.floor,
      extentionNumber: value.exNo,
      startTime: value.start_time,
      endTime: value.end_time,
      fromDate: new DatePipe('en-Us').transform(value.start_date, 'YYYY/MM/dd'),
      toDate: new DatePipe('en-Us').transform(value.end_date, 'YYYY/MM/dd'),
      workType: value.work_type,
      seatDetails: value.seat_type

    }
    // console.log(submitData, "submitdata")
    this.bookingServices.bookseat(submitData).subscribe(x => {
      
      if (!x.status) {
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
    }
    )
    }else{
      Swal.fire({
        icon: 'error',
        title: '',
        text: `Enter valid values`,
      })
    }
    

  }
  ngOnInit(): void {
    this.seatDetails = {
      floor: localStorage.getItem("Floor"),
      exNo: localStorage.getItem("ExNo"),
      seat_type: localStorage.getItem("seat_type")
    }
  }
  floors = ["Basement","Ground", "First Floor", "Second Floor", "Third Floor"]
  seat_type = ["Cabin", "Desktop Workstation", "Conference Room", "Shared Cabin"]
  work_type = ["Work From Home", "Office"]
  time_slots = [
    {slot_name:"9am-1pm", value:{start_time:'9:00',end_time:'1:00'}},
  ]
}
