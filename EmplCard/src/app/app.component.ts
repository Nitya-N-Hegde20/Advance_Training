import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ListEmployeesComponent } from "./components/list-employees/list-employees.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ListEmployeesComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'EmplCard';
}
