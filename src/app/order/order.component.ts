import { LunchService } from './../services/lunch/lunch.service';
import { LunchComponent } from './../lunch/lunch.component';
import { DinnerService } from './../services/dinner/dinner.service';
import { BreakfastService } from './../services/break/breakfast.service';
import { PizzaService } from './../services/pizza/pizza.service';
import { BreakfastComponent } from './../breakfast/breakfast.component';
import { AllPizzaComponent } from './../all-pizza/all-pizza.component';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { ShoppingcartService } from '../services/shopping/shoppingcart.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.scss']
})
export class OrderComponent implements OnInit,OnDestroy {
  
  allpizza;
  allBreakFast;
  allDinner;
  allLunch;
  subscribe1:Subscription
  constructor(private pizza:PizzaService,
    private breakFast:BreakfastService,
    private dinner:DinnerService,
    private lunch:LunchService,
    private card:ShoppingcartService) { 
    this.pizza.getAllPizza().subscribe(pizza=>this.allpizza=pizza);
    this.breakFast.getAllBreakfast().subscribe(breakfast=>this.allBreakFast=breakfast)
    this.dinner.getAlldinner().subscribe(dinner=>this.allDinner=dinner)
    this.lunch.getAllLunch().subscribe(lunch=>this.allLunch=lunch)

  }


  
firstChoose=false;
secondChoose=false;
thirdChoose=false;
fourthChoose=false;

  choosePizza(){
this.firstChoose = !this.firstChoose ;
this.secondChoose=false;  
this.thirdChoose=false;
this.fourthChoose=false;

  }

  chooseBreakfast(){
    this.secondChoose = !this.secondChoose
    this.firstChoose=false;
    this.thirdChoose=false;
    this.fourthChoose=false;

  }
    
  chooseDinner(){
    this.thirdChoose=!this.thirdChoose;
    this.firstChoose=false;
    this.secondChoose=false;
    this.fourthChoose=false;

  }
  chooseLunch(){
    this.fourthChoose=!this.fourthChoose;
    this.firstChoose=false;
    this.secondChoose=false;
    this.thirdChoose=false;
  }


  cart: any;//contain all products that in card
  async ngOnInit() {
    this.subscribe1 = (await this.card.getCardProduct()).valueChanges().subscribe(cart => {
    this.cart = cart;
    })//return all product in the card in database
  }
   ;
  getQauntaty(product) {// reuturn qauntati of card item
    if (!this.cart ) {
       return 0 
      }
      else{
      
          let item = this.cart.items[product.key];
            return item ? item.quantity : 0  
      }
  }
  decreaseQauntaty(productQauantaty){
    this.card.decreaseQaunataty(productQauantaty);
  }
  addCardAndQauantaty(product) {//for card in database if product exsist will increase qauntaty
    this.card.addProductToCard(product);
  }
  ngOnDestroy(): void {
this.subscribe1.unsubscribe();  }
  
  }


