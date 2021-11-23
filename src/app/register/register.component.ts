import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  acno=""
  pswd=""
  uname=""

  
  constructor(private ds:DataService,private router:Router) { }

  ngOnInit(): void {
  }

  register(){
    let accno=this.acno
    let username=this.uname
    let paswd=this.pswd
   var result=this.ds.register(accno,username,paswd)
   if(result){
     alert("Account created successfully, please login!!")
     this.router.navigateByUrl('')
   }
   else{
     alert("account already exist.Please Login!!")
     this.router.navigateByUrl('')
   }
  }



}
