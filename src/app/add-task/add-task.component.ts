import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.scss']
})
export class AddTaskComponent implements OnInit {
  myApp: FormGroup;
  tasksList: string[] = [];
  constructor(private fb: FormBuilder) {
    this.myApp = this.fb.group({
      task: ['', [Validators.required, Validators.minLength(3)]],
    });
  }

  ngOnInit() {

  }
  myTask: string;
  onSubmit() {
    this.myTask = this.myApp.controls.task.value;
    if (this.tasksList.find(x => x == this.myTask))
      alert("קיימת כזו משימה");
    else {
      if (this.tasksList.length < 5) {
        this.tasksList.push(this.myTask);
        alert("משימה נוספה");
      }
      else
        alert("יש כבר חמש משימות");
    }
    console.log(this.tasksList);
  }
  restorTask: string;
  indexDelete: number;
  deleteTask(deleteTask: string) {
    console.log(deleteTask);
    this.restorTask = deleteTask;
    const index = this.tasksList.indexOf(deleteTask, 0);
    this.indexDelete = index;
    if (index > -1) {
      this.tasksList.splice(index, 1);
      alert("נמחק בהצלחה")
    }
    console.log(this.tasksList);
  }

  lastDelTask() {
    if (this.restorTask != null && this.tasksList.length < 5 && !this.tasksList.find(x => x == this.restorTask)) {
      this.tasksList.splice(this.indexDelete, 0, this.restorTask);
      alert("הוספה אחרונה שוחזרה");
    }
    else {
      alert("שגיאה");
    }
  }


}
