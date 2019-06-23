import { Component, OnInit } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
  providers:[NgbCarouselConfig]
})
export class NavbarComponent implements OnInit {

  constructor(config:NgbCarouselConfig) {
    config.interval=5000;
    config.wrap=true;
    config.keyboard=false;
    config.pauseOnHover=false
 
   }

  ngOnInit() {
  }

}
