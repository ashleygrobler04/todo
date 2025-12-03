import { Injectable } from '@angular/core';
import { Task } from './task';

@Injectable({
  providedIn: 'root',
})
export class LocalStorage {

  getTasks(): Task[] {
    const data = localStorage.getItem("Tasks");
    return data ? JSON.parse(data) as Task[] : [];
  }

  setTasks(tasks: Task[]): void {
    localStorage.setItem("Tasks", JSON.stringify(tasks));
  }
}
