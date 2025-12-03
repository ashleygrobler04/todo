import { Component, signal, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-task-input',
  templateUrl: './task-input.html'
})
export class TaskInput {
  task = signal("");

  @Output() submitTask = new EventEmitter<string>();

  onTaskChange(event: Event) {
    const taskElement = event.target as HTMLInputElement;
    this.task.set(taskElement.value);
  }

  onSubmitClick() {
    if (!this.task().trim()) return;
    this.submitTask.emit(this.task());
    this.task.set("");
  }
}
