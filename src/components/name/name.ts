import { Component, Input } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: 'name.html'
})
export class NameComponent {

  @Input() tab: any;

  constructor() {
    console.log('Hello NameComponent Component');
  }
}
