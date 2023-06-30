import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profil-card-skeleton',
  templateUrl: './profil-card-skeleton.component.html',
  styleUrls: ['./profil-card-skeleton.component.css']
})
export class ProfilCardSkeletonComponent {

  @Input() expectedCards: number = 8;

  constructor() { }


  getArrayCardsExpected (): Array<number> {
    return new Array(this.expectedCards).fill(1);
  }
}
