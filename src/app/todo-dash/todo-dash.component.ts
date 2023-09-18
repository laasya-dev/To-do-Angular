import { Component, OnInit } from '@angular/core';
import {FormBuilder,FormGroup,Validators} from '@angular/forms'
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import { ITask } from '../model/tasks';

@Component({
  selector: 'app-todo-dash',
  templateUrl: './todo-dash.component.html',
  styleUrls: ['./todo-dash.component.css']
})
export class TodoDashComponent implements OnInit {

  todoForm !: FormGroup;
  tasks : ITask [] =[];
  done : ITask [] =[];
  updateId !: any;
  EditEnabled : boolean = false;

  constructor(private fb : FormBuilder) { }

  ngOnInit(): void {
    this.todoForm =this.fb.group({
      item : ['', Validators.required]
    })
  }

  addTask(){
    this.tasks.push({
      description : this.todoForm.value.item,
      done: false
    })
    this.todoForm.reset()
  }
  onEdit(item:ITask, i:number){
    this.EditEnabled = true;
    this.tasks.splice(i,1)
    this.todoForm.controls['item'].setValue(item.description);
    this.updateId(i);
  }
  updateTask(){
    this.EditEnabled = false;
    this.tasks.push({
      description : this.todoForm.value.item,
      done: false
    })
    this.todoForm.reset()
  }

  delTask(i: number){
    this.tasks.splice(i,1)
  }
  deldoneTask(i: number){
    this.done.splice(i,1)
  }

  drop(event: CdkDragDrop<ITask[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex,
      );
    }
  }
}
