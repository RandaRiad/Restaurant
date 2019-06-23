import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class BreakfastService {

  constructor(private db:AngularFireDatabase) { }
  getAllBreakfast(){
    return this.db.list('/breakfast/').snapshotChanges();
    
  }
}
