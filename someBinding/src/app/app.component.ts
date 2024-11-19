import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { RandomNumberComponent } from "./components/random-number/random-number.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RandomNumberComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'someBinding';
}
