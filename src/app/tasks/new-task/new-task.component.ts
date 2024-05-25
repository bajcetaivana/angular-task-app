import { Component, EventEmitter, Output, output, signal, inject, Input } from '@angular/core';
// import { NewTaskData } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Input({required: true}) userId!: string;
  @Output() closeDialog = new EventEmitter<void>();
  // @Output() add =new EventEmitter<NewTaskData>();
  private tasksService  = inject(TasksService)

  enteredTitle = ''; 
  enteredSummary = '';
  enteredDueDate = '';

  // enteredTitle = ''; 
  // enteredSummary = '';
  // enteredDueDate = '';


  closeAddTaskDialog() {
    this.closeDialog.emit();
  }

  onSubmit() {
    console.log(this);
    this.tasksService.addTask({
        title: this.enteredTitle,
        summary: this.enteredSummary,
        dueDate: this.enteredDueDate    
      }, this.userId);
      this.closeDialog.emit();


  }



}
