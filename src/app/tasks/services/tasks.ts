import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Task } from '../models/task.model';
import { Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class TasksService {

  private api = 'http://localhost:3000/tasks';

  constructor(private http: HttpClient) {}

  getTasks(): Observable<Task[]> {
    return this.http.get<Task[]>(this.api);   // ✅ return REQUIRED
  }

  addTask(task: Task): Observable<Task> {
    return this.http.post<Task>(this.api, task); // ✅ return REQUIRED
  }

  deleteTask(id: number): Observable<void> {
    return this.http.delete<void>(`${this.api}/${id}`); // ✅ return REQUIRED
  }
}
