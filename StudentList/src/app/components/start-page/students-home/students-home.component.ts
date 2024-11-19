import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { Students } from '../../Model/Student';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-students-home',
  standalone: true,
  imports: [RouterLink,RouterOutlet,CommonModule,],
  templateUrl: './students-home.component.html',
  styleUrl: './students-home.component.css'
})
export class StudentsHomeComponent {
  st:Students[]=[
    {
      RollNumber: 1,
  
      Name: "Deeksha",
    
      Branch: "ISE",
    
      Sem: 8
    },
    {
      RollNumber: 2,
  
      Name: "Gagan",
    
      Branch: "AIML",
    
      Sem: 8
    },{
      RollNumber: 3,
  
      Name: "Prajwal",
    
      Branch: "ISE",
    
      Sem: 8
    },
    {
      RollNumber: 4,
  
      Name: "Aman",
    
      Branch: "CSE",
    
      Sem: 8
    }
  ]

  
}
