import { Component } from '@angular/core';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.scss']
})
export class TodoListComponent {
  todoModel:any;
  listOfTodo : any[] = [];

  onSubmit() {
    this.listOfTodo.push(this.todoModel);
    console.log(this.listOfTodo);
    this.todoModel = '';
  }
}
