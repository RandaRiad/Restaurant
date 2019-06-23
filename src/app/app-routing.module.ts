import { LunchComponent } from './lunch/lunch.component';
import { BreakfastComponent } from './breakfast/breakfast.component';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { OrderComponent } from './order/order.component';
import { DinnerComponent } from './dinner/dinner.component';

const routes: Routes = [
  {path:"pizza", component:AllPizzaComponent},
  {path:"breakfast", component:BreakfastComponent},
  {path:"order", component:OrderComponent},
  {path:"dinner", component:DinnerComponent},
  {path:"lunch", component:LunchComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
