import { Component, effect, signal } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';
import { ProfileService } from './services/profile.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {

  count = signal<number>(0);
  constructor(private readonly db: AngularFireDatabase, private readonly profilService: ProfileService) {

    this.profilService.getProfile();

    effect(()=> {
      console.log("effect " + this.count());
    });

  }

  changeCount(val:number) {
    this.count.set(this.count() + val);
    const tutRef = this.db.object('tutorial');
    tutRef.set({ title: val });
  }
  
  
}


