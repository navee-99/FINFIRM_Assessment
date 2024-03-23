import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements  OnInit {

constructor(private httpService:HttpClient,private router:Router){
  
}
  ngOnInit(){

  }
  isCorrectPassword:boolean=true;
  isCorrectUser:boolean=true;
  userId:number=0;
password:string='';
  getValidate(){

   return this.httpService.get("http://localhost:8080/login?userId="+this.userId+"&password="+this.password,{responseType:'text'})
  }
  login(){
    this.isCorrectUser=true;
    this.isCorrectPassword=true;
this.getValidate().subscribe((res=>{

  if(res==='UserID is not valid'){
    this.isCorrectUser=false;
  }
  
  if(res==='Password is not valid'){
    this.isCorrectPassword=false;
  }
  if(res==='Login Success'){
this.router.navigateByUrl('/home')
  }
  console.log(res)
}))

  }
}
