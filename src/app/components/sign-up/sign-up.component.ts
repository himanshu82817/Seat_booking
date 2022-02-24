import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { SignInService } from 'src/app/services/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  myFormControl=new FormControl();
  signUpForm: FormGroup;
  constructor(
    private formBuilder:FormBuilder,
    private service: SignInService
  ) {
     this.signUpForm=this.formBuilder.group({
       name:['',Validators.required],
       email:['',],
       role:['',Validators.required],
       employeeId:['',Validators.required],
       member:['',Validators.required],
     })

   }


  ngOnInit(): void {
  }
  email = new FormControl('', [Validators.required, Validators.email]);

  getErrorMessage() {
    if (this.email.hasError('required')) {
      return 'You must enter a value';
    }

    return this.email.hasError('email') ? 'Not a valid email' : '';
  }

  roles = ["user","admin"];
  members=["Internal","External"];

  signUp(value){
    var data1={
             name:value.name,
             email:value.email,
             role:value.role,
             employeeId:value.employeeId,
             member:value.member
     }
  
    this.service.signUp(data1).subscribe(x=>{
      if(x.token){
        Swal.fire({
          icon: 'success',
          // title: 'Oops...',
          text: 'You have successfully created the user',
        })
        setInterval(x=>{
          location.reload();

        },2000)
      
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: `${x.error.message}`,
        })
      }
    },err=>{
      console.log(err);
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: `${err.error.message}`,
      })
    })
  }
}
