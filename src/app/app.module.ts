import { BreakfastComponent } from './breakfast/breakfast.component';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule} from '@angular/forms'

import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { environment } from 'src/environments/environment';
import {AngularFireModule} from '@angular/fire';
import {AngularFireDatabaseModule} from '@angular/fire/database';
import {AngularFireAuthModule} from '@angular/fire/auth';
import { AllPizzaComponent } from './all-pizza/all-pizza.component';
import { PizzaService } from './services/pizza/pizza.service';
import { FooterComponent } from './footer/footer.component';
import { FormsModule } from '@angular/forms';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { DinnerComponent } from './dinner/dinner.component';
import { BreakfastService } from './services/break/breakfast.service';
import { OrderComponent } from './order/order.component';
import { LunchComponent } from './lunch/lunch.component';
import { DinnerService } from './services/dinner/dinner.service';
import { LunchService } from './services/lunch/lunch.service';
import { CheckOutComponent } from './check-out/check-out.component';
import { HomeComponent } from './home/home.component';
@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    AllPizzaComponent,
    FooterComponent,
    DinnerComponent,
    BreakfastComponent,
    OrderComponent,
    LunchComponent,
    CheckOutComponent,
    HomeComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule


  ],
  providers: [PizzaService,BreakfastService,LunchService,DinnerService],
  bootstrap: [AppComponent]
})
export class AppModule { }
