import { createAction, props } from '@ngrx/store';
import { Task } from '../models/task.model';

export const loadTasks = createAction('[Tasks] Load');

export const loadTasksSuccess = createAction(
  '[Tasks] Load Success',
  props<{ tasks: Task[] }>()
);

export const addTask = createAction(
  '[Tasks] Add',
  props<{ task: Task }>()
);

export const deleteTask = createAction(
  '[Tasks] Delete',
  props<{ id: number }>()
);
