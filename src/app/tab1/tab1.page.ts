import { Component, OnInit } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { SharedService } from '../shared.service';


@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit {
  public todoForm;

  public todos: any[] = [];
  public obj;
  constructor(private formBuilder: FormBuilder, private service: SharedService) {
  }
  makeTodo() {
    this.obj = this.todoForm.value;

    this.todos.push(this.obj);

    this.service.refreshTodo(this.todos);
    this.todoForm.reset();
  }


  ngOnInit() {
    this.service.refreshTodo(this.todos);

    this.todoForm = this.formBuilder.group({
      task: ['', Validators.required],
      desc: ['', Validators.required],
    })
  }

}
