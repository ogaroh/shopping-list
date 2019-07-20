import { Component } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';
import { Observable, Observer } from 'rxjs';
import { Item } from './model/item';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Shopping List';
  description = 'MY SHOPPING LIST';

  itemValue = '';
  items: Observable<any[]>;
  prices: Observable<an>;

  constructor(public db: AngularFireDatabase) {
    this.items = db.list('items').valueChanges();
  }

  // onSUbmit method;
  // push to backend database
  onSubmit(){
    this.db.list('items').push({ content: this.itemValue});
    this.itemValue = '';
  }
}
