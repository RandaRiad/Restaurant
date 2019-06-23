import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class DinnerService {

  constructor(private db:AngularFireDatabase) { }
  getAlldinner(){
    return this.db.list('/dinner/').snapshotChanges();
    
  }
}
