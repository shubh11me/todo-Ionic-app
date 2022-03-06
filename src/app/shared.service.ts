import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
@Output() refresh = new EventEmitter();

refreshTodo(data){
  this.refresh.emit(data);
}
  constructor() { }
}
