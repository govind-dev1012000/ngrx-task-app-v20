import { createReducer, on } from '@ngrx/store';
import * as TaskActions from './tasks.actions';
import { Task } from '../models/task.model';

export interface TasksState {
  tasks: Task[];
}

export const initialState: TasksState = {
  tasks: []
};

export const tasksReducer = createReducer(
  initialState,
  on(TaskActions.loadTasksSuccess, (state, { tasks }) => ({
    ...state,
    tasks
  }))
);
