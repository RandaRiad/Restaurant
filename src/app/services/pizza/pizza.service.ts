import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class PizzaService {

  constructor(private db:AngularFireDatabase) { }
  getAllPizza(){
    return this.db.list('/pizza/').snapshotChanges();
    
  }
}
