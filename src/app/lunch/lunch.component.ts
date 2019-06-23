import { LunchService } from './../services/lunch/lunch.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-lunch',
  templateUrl: './lunch.component.html',
  styleUrls: ['./lunch.component.scss']
})
export class LunchComponent implements OnInit {
  allLunch:any[];
  constructor(private lunch:LunchService) {

    this.lunch.getAllLunch().subscribe(lunch=>{
      this.allLunch=lunch;
    })
   }

  ngOnInit() {
  }

}
