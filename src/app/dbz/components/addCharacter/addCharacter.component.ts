import { Component, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.interface';

@Component({
  selector: 'app-dbz-add-character',
  templateUrl: './addCharacter.component.html',
  styleUrl: './addCharacter.component.css',
})
export class addCharacterComponent {

    @Output()
    public onNewCharacter: EventEmitter<Character> = new EventEmitter();

    public character: Character = {
      name: 'algo',
      power: 10,
    }


    emitCharacter(): void {

      // console.log(this.character);

      if ( this.character.name.length === 0 ) return;

      this.onNewCharacter.emit(this.character);

      this.character = { name: '', power: 0 };

    }

}
