import { Component, Input } from '@angular/core';
import { IProfile } from 'src/app/models/IProfil';

@Component({
  selector: 'app-profil-card',
  templateUrl: './profil-card.component.html',
  styleUrls: ['./profil-card.component.css']
})
export class ProfilCardComponent {
  @Input() profil: IProfile | undefined;

  constructor() { 

    if ( this.profil ) {
      console.log("ICI");
      console.log(this.profil);
    }
  }

}
