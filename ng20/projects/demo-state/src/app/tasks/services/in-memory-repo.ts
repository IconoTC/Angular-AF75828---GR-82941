import { Injectable } from '@angular/core';
import { RepoRx } from '../../core/types/repo';
import { ID, Task, TaskDTO } from '../models/task';
import INITIAL_TASKS from '../data/task-data.json';
import { Observable, of, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRepo implements RepoRx<Task, TaskDTO> {
  private _data: Task[] = INITIAL_TASKS

  get data() {
    return this._data;
  }

  private generateId(): number {
    return this._data.length
      ? Math.max(...this._data.map((t) => Number(t.id) || 0)) + 1
      : 1;
  }

  getAll(): Observable<Task[]> {
    return of(this._data);
  }
  getById(id: ID): Observable<Task> {
    const task = this._data.find((t) => t.id === id);
    return task ? of(task) : throwError('Task not found');
  }

  add(item: TaskDTO): Observable<Task> {
    const newTask: Task = { id: this.generateId(), ...item };
    this._data.push(newTask);
    return of(newTask);
  }

  update(id: ID, item: Task): Observable<void> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data[index] = item;
      return of(undefined);
    }
    return throwError('Task not found');
  }
  delete(id: ID): Observable<void> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data.splice(index, 1);
      return of(undefined);
    }
    return throwError('Task not found');
  }
}
