import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-footer-component',
  templateUrl: './footer-component.component.html',
  styleUrls: ['./footer-component.component.css'],
})
export class FooterComponentComponent implements OnInit {


  @Input() todos: any[] = [];



  @Output() clearComplete = new EventEmitter();

  constructor() { }

  ngOnInit() {

  }

  doClear() {
    this.clearComplete.emit();
  }

}
