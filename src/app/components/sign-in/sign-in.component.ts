import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SignInService } from 'src/app/services/sign-in.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {
  myFormControl = new FormControl();
  signInFormGroup: FormGroup;
  token;
  email;
  constructor(private signInService:SignInService,
              private formBuilder: FormBuilder,
              private router: Router) { 
                this.signInFormGroup = this.formBuilder.group({
                  email:['',Validators.email],
                  password:['', Validators.required]
                });
              }
  hide = true
  ngOnInit(): void {
  }

  signIn(data:any){
    const submitData:any = {
      username:data.email,
      password:data.password
    };

    this.signInService.signIn(submitData).subscribe(x=> {
      let token = x.token
      let role = x.user.role
      
      localStorage.setItem("token",token);
      localStorage.setItem("role",role);
            this.router.navigate(['/admin']);
      },
        err =>
         {
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Enter Correct Username and Password',
          })
           console.log(err)
         })
  }

}
