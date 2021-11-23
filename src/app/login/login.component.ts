import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DataService } from '../service/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
 aim="your perfect banking partner"
 accno="account number plz" 

 acno=""
 pswd=""
 
 constructor(private routerlogin:Router,private ds:DataService) { }

  ngOnInit(): void {
  }
  
  pwdChange(event:any){
     this.pswd=event.target.value
     console.log(this.pswd);
     
  }
  accnoChange(event:any){
    this.acno=event.target.value
    console.log(this.acno);
    
  }

  login(){
    var accno = this.acno
    var pswd = this.pswd

    var result=this.ds.login(accno,pswd)
    
    if(result){
        alert("login successful")
        this.routerlogin.navigateByUrl('home')
      }
     
  }
  // login(a:any,p:any){
  //     var acno =a.value
  //     var pswd =p.value
  //     var db   = this.data
  
  //     if(acno in db){
  //       if(pswd == db[acno]["password"]){
  //         alert("login successful")
  
  //       }
  //       else{
  //         alert("invalid password")
  
  //       }
  
  //     }
  //     else{
  //       alert("user doesnot exist!")
  
  //     }
  //   }
}
