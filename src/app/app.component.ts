import { Component, OnDestroy, OnInit, effect, signal } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { ProfileService } from './services/profile.service';
import { IProfile } from './models/IProfil';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy  {
  count = signal<number>(0);

  profils: any[] | null | undefined = undefined;

  throttleCardProfil :number= 500;

  constructor(private readonly db: AngularFireDatabase, private readonly profilService: ProfileService) {

    effect(()=> {
      console.log("effect " + this.count());
    });
    
  }


  ngOnInit() {

    setTimeout( async () => {
      this.profils = await this.profilService.getProfile();
    }, this.throttleCardProfil)

  }

  ngOnDestroy() { }

  changeCount(val:number) {
    this.count.set(this.count() + val);
    const tutRef = this.db.object('tutorial');
    tutRef.set({ title: val });
  }
  
  
}


