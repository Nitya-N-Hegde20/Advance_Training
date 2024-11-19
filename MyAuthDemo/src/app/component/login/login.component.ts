import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
userObj:any={
  UserName:'',
  Password:''
};
router=inject(Router)
http=inject(HttpClient)
  resultObj: any;
onLogin(){
this.http.post("https://localhost:7002/api/auth/login",
this.userObj).subscribe((res:any)=> {
  this.resultObj=res;
  console.log(this.resultObj);
}
);

  if(this.resultObj.isSuccess){
    alert("login Success");

    localStorage.setItem('loginUser', this.userObj.UserName)
 
    this.router.navigateByUrl('add-emp')
 
   } else {
 
    alert('Wrong Credentials')
   

  }
}

}
