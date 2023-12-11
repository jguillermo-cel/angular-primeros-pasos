import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: `./list.component.html`,
  styleUrl: './list.component.css'
})
export class ListComponent {

  @Output()
  onDeleteByIndex: EventEmitter<number> = new EventEmitter();

  @Output()
  onDeleteById: EventEmitter<string> = new EventEmitter();

  @Input()
  public characterList: Character[] = [{
    name: 'Trunks',
    power: 10
  }]


  onDeleteCharacter(index: number): void {
    this.onDeleteByIndex.emit(index);
    console.log(index);
  }

  deleteCharacterById(id: string): void {
    this.onDeleteById.emit(id);
  }



}
