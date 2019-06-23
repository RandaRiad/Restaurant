import { Injectable } from '@angular/core';
import { AngularFireDatabase } from '@angular/fire/database';

@Injectable({
  providedIn: 'root'
})
export class LunchService {

  constructor(private db:AngularFireDatabase) { }
  
  getAllLunch(){
    return this.db.list('/lunch/').snapshotChanges();
    
  }
}
