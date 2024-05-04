import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css',
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    name: 'John',
    power: 100,
    }
  ]

  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();

  // @Input()
  onDeleteCharacter(id?: string): void {
    // this.characterList.splice(index, 1);
    // console.log({index})
    if (!id ) return;

    console.log({ id });

    this.onDelete.emit(id);
  }

}
