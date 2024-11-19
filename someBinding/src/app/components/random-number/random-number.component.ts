import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-random-number',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './random-number.component.html',
  styleUrl: './random-number.component.css',
  template: `
    <p>Your color preference is {{ theme }}.</p>
  `
})
export class RandomNumberComponent {
  randomNumber!: number;
  theme="dark"
  generateRandomNumber(): void {
    this.randomNumber = Math.floor(Math.random() * 10) + 1;
  }

  checkGuess(): void {
    const guessInput = <HTMLInputElement>document.getElementById('guess');
    const guess = Number(guessInput.value);
    let message = '';

    if (guess > this.randomNumber) {
      message = 'Entered number is high';
    } 
    else if (guess < this.randomNumber) {
      message = 'Entered number is low';
    } 
    else {
      message = 'You did it';
    }

    alert(message);
}
}
