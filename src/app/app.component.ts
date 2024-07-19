import { Component } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  expenses: Observable<any[]>;
  newExpense = { description: '', amount: 0 };

  constructor(private firestore: AngularFirestore) {
    this.expenses = firestore.collection('expenses').valueChanges();
  }

  addExpense() {
    this.firestore.collection('expenses').add(this.newExpense);
    this.newExpense = { description: '', amount: 0 };
  }
}
