import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { TaskModal } from '../task-modal/task-modal';
import { selectAllTasks } from '../../store/tasks.selectors';
import * as TaskActions from '../../store/tasks.actions';
import { Task } from '../../models/task.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskModal,CommonModule],
  templateUrl: './tasks.html',
  styleUrl: './tasks.css'
})
export class Tasks {

  tasks$;
  showModal = false;

  constructor(private store: Store) {
    this.tasks$ = this.store.select(selectAllTasks);
    this.store.dispatch(TaskActions.loadTasks());
  }

  open() { this.showModal = true; }
  close() { this.showModal = false; }

  add(task: Task) {
    this.store.dispatch(TaskActions.addTask({ task }));
    this.close();
  }

  remove(id: number) {
    this.store.dispatch(TaskActions.deleteTask({ id }));
  }
}
