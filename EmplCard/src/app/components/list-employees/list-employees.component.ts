import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { CommonModule } from '@angular/common';
import { Employee } from '../../Model/Employee';

@Component({
  selector: 'app-list-employees',
  standalone: true,
  imports: [DatePipe,CommonModule],
  templateUrl: './list-employees.component.html',
  styleUrl: './list-employees.component.css'
})
export class ListEmployeesComponent implements OnInit{
photoPath: any;
ngOnInit(): void {
  throw new Error('Method not implemented.');
}

employees:Employee[]=[
  {
    id:1,
    name:"Deeksha",
    gender: "Female",

    email:"Deeksha@ust.com",
  
    phoneNumber:91082823892,
  
    dateOfBirth: new Date(2002),
  
    department:"ISE",
  
    isActive:true,
  
    photoPath:"Deeksha.jpg"
  },
  {
    id:2,
    name:"Aman",
    gender: "Male",

    email:"Aman@ust.com",
  
    phoneNumber:91082823892,
  
    dateOfBirth: new Date(2002),
  
    department:"ISE",
  
    isActive:true,
  
    photoPath:"aman.jpg"
  }
]

}

