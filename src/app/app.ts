import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Tasks } from './tasks/components/tasks/tasks';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,Tasks],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  
}

