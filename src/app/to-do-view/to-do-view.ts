import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Task } from '../task';

@Component({
  selector: 'app-to-do-view',
  templateUrl: './to-do-view.html'
})
export class ToDoView {
  @Input() tasks: Task[] = [];

  @Output() toggleTask = new EventEmitter<Task>();
  @Output() deleteTask = new EventEmitter<Task>();

  onToggle(task: Task) {
    this.toggleTask.emit(task);
  }

  onDelete(task: Task) {
    this.deleteTask.emit(task);
  }
}
