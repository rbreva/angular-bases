import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-hero',
  templateUrl: './hero.component.html',
  styleUrl: './hero.component.css'
})
export class HeroComponent {

  public name: string = 'windstorm';
  public age: number = 42;

  get capitalizedName(): string {
    return this.name.toUpperCase();
  }

  getHeroDescription(): string {
    return `${this.name} - ${this.age}`;
  }

  changeHero(): void {
    this.name = 'Superman';
  }

  changeAge(): void {
    this.age = 99;
  }

  reset(): void {
    this.name = 'windstorm';
    this.age = 42;
  }

}


