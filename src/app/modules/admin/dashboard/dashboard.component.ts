import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import {MatSnackBar} from '@angular/material/snack-bar';
import { BookingService } from 'src/app/services/booking.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  constructor(private userService:UserService,
     private router:Router,
      private snackBar:MatSnackBar,
      private bookingServices: BookingService ) { }
  
  tableData = [{
    "floor": "N/A",
    "userName": "N/A",
    "extentionNumber":"N/A",
    "startTime": "N/A",
    "endTime": "N/A",
    "fromDate": "N/A",
    "toDate": "N/A",
    "id": "N/A"
}]
meetingData = {
    "teamHead": "N/A",
    "extentionNumber":"N/A",
    "startTime": "N/A",
    "endTime": "N/A",
    "fromDate": "N/A",
    "toDate": "N/A"
}
  selectedFloor = "Basement"
  toggleFloor(value){
    // console.log(value)
    this.selectedFloor = value
    const data:any = {
      data:value
    }
    this.userService.getData(data).subscribe(x=>{
      this.total = x.totalCount
      this.booked = x.booked
      this.available = x.available
      this.seats = x.floorData
      console.log(x)
    },err=>{
      console.log(err);
    })
  }


  ngOnInit(): void {
    this.toggleFloor("Basement")
    this.userService.userDetails().subscribe(x=>{
      console.log(x)
    this.tableData = x.data
    this.meetingData = x.data1[0]
    
   })
  }
 
  floors = ["Basement","Ground","First Floor", "Second Floor", "Third Floor"]
  total 
  booked 
  available

  seats = []
  bookSeat(value){
    if(!value.fixedSeat){
      localStorage.setItem('Floor',this.selectedFloor)
      localStorage.setItem('ExNo',value.extentionNumber)
      localStorage.setItem('seat_type',value.seatDetails)
      this.router.navigate(["/admin/booking"])

    }
    else {
      console.log("this seat is not available ")
      this.snackBar.open(`This seat is Fixed for ${value.userName}`, 'OK')
    }
  }
  cancelSeat(value){
   
      this.bookingServices.cancelSeat(value).subscribe(x=>{
      Swal.fire({
        icon: 'success',
        // title: 'Oops...',
        text:x.message,
      })
    })
    setTimeout(() => {
      location.reload()    
      // console.log("mai chl rha hu")
    },1000);
    
    
     

  }   
  
}
