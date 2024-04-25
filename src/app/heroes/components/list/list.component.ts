import { Component } from '@angular/core';

@Component({
  selector: 'app-heroes-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public heroNames: string[] = ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10'];
  public deleteHero?: string;

  public removeLastHero():void {
    this.deleteHero = this.heroNames.pop();
  }
}
