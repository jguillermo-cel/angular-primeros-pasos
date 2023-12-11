import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `
  <h3>
  Counter: {{ counter}}
</h3>

<button (click)="increaseBy(factor)">+{{factor}}</button>
<button (click)="resetCounter()">Reset</button>
<button (click)="increaseBy(-factor)">-{{factor}}</button>`
})

export class CounterComponent {
  constructor() { }

  public counter:number = 10;
  public factor:number = 5;

  increaseBy(value:number):void {
    this.counter +=value;
  }

  resetCounter():void{
    this.counter = 10;
  }
}
