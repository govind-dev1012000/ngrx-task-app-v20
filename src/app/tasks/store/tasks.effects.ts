import { Injectable, inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { TasksService } from '../services/tasks';
import * as TaskActions from './tasks.actions';
import { mergeMap, map } from 'rxjs/operators';

@Injectable()
export class TasksEffects {

  private actions$ = inject(Actions);
  private tasksService = inject(TasksService);

  loadTasks$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.loadTasks),
      mergeMap(() =>
        this.tasksService.getTasks().pipe(
          map(tasks => TaskActions.loadTasksSuccess({ tasks }))
        )
      )
    )
  );

  addTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.addTask),
      mergeMap(({ task }) =>
        this.tasksService.addTask(task).pipe(
          map(() => TaskActions.loadTasks())
        )
      )
    )
  );

  deleteTask$ = createEffect(() =>
    this.actions$.pipe(
      ofType(TaskActions.deleteTask),
      mergeMap(({ id }) =>
        this.tasksService.deleteTask(id).pipe(
          map(() => TaskActions.loadTasks())
        )
      )
    )
  );
}
