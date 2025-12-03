import { Component, signal } from '@angular/core';
import { LocalStorage } from './local-storage';
import { Task } from './task';
import { TaskInput } from './task-input/task-input';
import { ToDoView } from './to-do-view/to-do-view';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrls: ['./app.css'],
  imports: [ToDoView, TaskInput]
})
export class App {

  tasks = signal<Task[]>([]);

  constructor(private storage: LocalStorage) {
    // Load persisted tasks when app starts
    this.tasks.set(this.storage.getTasks());
  }

  addTask(title: string) {
    const newTask: Task = { Title: title, Done: false };
    this.tasks.update(t => [...t, newTask]);
    this.storage.setTasks(this.tasks());
  }

  toggleTask(task: Task) {
    this.tasks.update(list => {
      const updated = list.map(t =>
        t.Title === task.Title
          ? { ...t, Done: !t.Done }
          : t
      );
      this.storage.setTasks(updated);
      return updated;
    });
  }

  deleteTask(task: Task) {
    this.tasks.update(list => {
      const updated = list.filter(t => t.Title !== task.Title);
      this.storage.setTasks(updated);
      return updated;
    });
  }
}
