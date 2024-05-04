import { Injectable } from '@angular/core';
import { Character } from '../interfaces/character.interface';
import { v4 as uuid } from 'uuid'

@Injectable({
  providedIn: 'root'
})

export class DbzService {

  public characters: Character[] = [
    {
      id: uuid(),
      name: 'Goku',
      power: 9001
    },
    {
      id: uuid(),
      name: 'Vegeta',
      power: 9000
    },
    {
      id: uuid(),
      name: 'Trunks',
      power: 8000
    },
    {
      id: uuid(),
      name: 'Piccolo',
      power: 7000
    },
    {
      id: uuid(),
      name: 'Krillin',
      power: 6000
    }
  ];

  addCharacter( character: Character ): void {

    const newCharacter: Character = { id:uuid(), ...character };

    this.characters.push( newCharacter );

  }

  // onDeleteCharacter( index: number ): void {
  //   this.characters.splice(index,1);
  // }
  deleteCharacterById( id: string ) {
    this.characters = this.characters.filter(character => character.id!== id);
  }

}
