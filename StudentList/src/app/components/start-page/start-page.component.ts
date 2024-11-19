import { Component } from '@angular/core';
import { AddNewComponent } from './add-new/add-new.component';
import { UpdateComponent } from './update/update.component';
import { DeleteComponent } from './delete/delete.component';
import { DetailsComponent } from './details/details.component';
import { RouterLink, RouterOutlet } from '@angular/router';
import { StudentsHomeComponent } from './students-home/students-home.component';

@Component({
  selector: 'app-start-page',
  standalone: true,
  imports: [AddNewComponent,UpdateComponent,DeleteComponent,DetailsComponent,RouterLink,RouterOutlet,StudentsHomeComponent],
  templateUrl: './start-page.component.html',
  styleUrl: './start-page.component.css'
})
export class StartPageComponent {

}
