import { Injectable } from '@angular/core';
import { Repo } from '../../core/types/repo';
import { ID, Task, TaskDTO } from '../models/task';
import INITIAL_TASKS from '../data/task-data.json';

@Injectable({
  providedIn: 'root',
})
export class InMemoryRepo implements Repo<Task, TaskDTO> {
  private _data: Task[] = INITIAL_TASKS

  get data() {
    return this._data;
  }

  private generateId(): number {
    return this._data.length
      ? Math.max(...this._data.map((t) => Number(t.id) || 0)) + 1
      : 1;
  }

  getAll(): Promise<Task[]> {
    return Promise.resolve(this._data);
  }
  getById(id: ID): Promise<Task> {
    const task = this._data.find((t) => t.id === id);
    return task ? Promise.resolve(task) : Promise.reject('Task not found');
  }

  add(item: TaskDTO): Promise<Task> {
    const newTask: Task = { id: this.generateId(), ...item };
    this._data.push(newTask);
    return Promise.resolve(newTask);
  }

  update(id: ID, item: Task): Promise<void> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data[index] = item;
      return Promise.resolve();
    }
    return Promise.reject('Task not found');
  }
  delete(id: ID): Promise<void> {
    const index = this._data.findIndex((t) => t.id === id);
    if (index !== -1) {
      this._data.splice(index, 1);
      return Promise.resolve();
    }
    return Promise.reject('Task not found');
  }
}
