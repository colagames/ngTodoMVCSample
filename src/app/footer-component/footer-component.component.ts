import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
})
export class FooterComponentComponent implements OnInit {


  tooMore = false;


  // @Input() todos: any[] = [];
  private _todos: any[] = [];

  @Input()
  set todos(value) {
    this._todos = value;
    this.tooMore = this.todos.length > 5;
  }
  get todos() {
    return this._todos;
  }

  @Output() clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doClear() {
    this.clearComplete.emit();
  }



}
