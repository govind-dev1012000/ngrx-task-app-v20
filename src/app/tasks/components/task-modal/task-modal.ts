import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../models/task.model';

@Component({
  selector: 'app-task-modal',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './task-modal.html',
  styleUrl: './task-modal.css'
})
export class TaskModal {
  @Input() task: Task = { title: '', completed: false };
  @Output() submit = new EventEmitter<Task>();
  @Output() close = new EventEmitter<void>();
}
