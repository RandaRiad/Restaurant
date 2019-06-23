import { BreakfastService } from './../services/break/breakfast.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breakfast',
  templateUrl: './breakfast.component.html',
  styleUrls: ['./breakfast.component.scss']
})
export class BreakfastComponent implements OnInit {
  allbreakFast:any[];
  constructor(private breakfast:BreakfastService) {

    this.breakfast.getAllBreakfast().subscribe(breakfast=>{
      this.allbreakFast=breakfast;
    })
   }

  ngOnInit() {
  }

}
