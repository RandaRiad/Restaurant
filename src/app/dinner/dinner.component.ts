import { DinnerService } from './../services/dinner/dinner.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dinner',
  templateUrl: './dinner.component.html',
  styleUrls: ['./dinner.component.scss']
})
export class DinnerComponent implements OnInit {

  alldinner:any[];
  constructor(private dinner:DinnerService) {

    this.dinner.getAlldinner().subscribe(dinner=>{
      this.alldinner=dinner;
    })
   }

  ngOnInit() {
  }

}
