import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-layout',
  standalone: true,
  imports: [RouterLink,RouterOutlet,FormsModule],
  templateUrl: './layout.component.html',
  styleUrl: './layout.component.css'
})
export class LayoutComponent {
router: any;
logOff(){
  localStorage.removeItem('loginUser');
  this.router.navigateByUrl('login');
}
loggedUserData:any;
constructor(){
  const loggedData=localStorage.getItem("loginUser");
  if(loggedData!=null){
    this.loggedUserData=loggedData;
  }
}
}
