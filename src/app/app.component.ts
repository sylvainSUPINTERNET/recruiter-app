import { Component, effect, signal } from '@angular/core';
import { AngularFireDatabase} from '@angular/fire/compat/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Recruiter-app';
  count = signal<number>(0);
  constructor(private db: AngularFireDatabase) {
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


