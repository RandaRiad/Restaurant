import { PizzaService } from './../services/pizza/pizza.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'all-pizza',
  templateUrl: './all-pizza.component.html',
  styleUrls: ['./all-pizza.component.scss']
})
export class AllPizzaComponent implements OnInit {
  allPizza:any[];
  constructor(private pizza:PizzaService) {

    this.pizza.getAllPizza().subscribe(pizza=>{
      this.allPizza=pizza;
    })
   }

  ngOnInit() {
  }
 
 


}
