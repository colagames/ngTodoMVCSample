import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
})
export class FooterComponentComponent implements OnInit, OnChanges {


  tooMore = false;


  @Input() todos: any[] = [];

  @Output() clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doClear() {
    this.clearComplete.emit();
  }

  ngOnChanges() {
    console.log('ngOnChanges');
    this.tooMore = this.todos.length > 5;
  }

}
