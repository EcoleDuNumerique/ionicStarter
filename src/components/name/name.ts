import { Component, Input } from '@angular/core';

@Component({
  selector: 'name',
  templateUrl: 'name.html'
})
export class NameComponent {

  @Input() name: string;

  constructor() {
    console.log('Hello NameComponent Component');
  }
}
