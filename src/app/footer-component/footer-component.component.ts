import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css']
})
export class FooterComponentComponent implements OnInit {


  @Input()
  todos: any[] = [];

  @Output()
  clearCompleted  = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
