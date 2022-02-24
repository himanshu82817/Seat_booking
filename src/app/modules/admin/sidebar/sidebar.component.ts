import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  constructor(private router: Router) { }
  role = ''
  ngOnInit(): void {
    let role =  localStorage.getItem('role')
   
   if(role!='admin'){
     this.options.pop();
     this.options.pop(); 
   }
  }
  getRoute(){
    console.log("",this.router.url)
  }
  options = [
  
    {name:'Dashboard',img:"far fa-file-chart-line", routerLink:"/admin"},
    {name:'Booking',img:"far fa-bookmark", routerLink:"/admin/booking"},
    {name:'Meetings',img:"far fa-users", routerLink:"/admin/meetings"},
    {name:'SignUp',img:"far fa-users", routerLink:"/admin/signup"},
  ]
  
}
