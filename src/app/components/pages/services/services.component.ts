import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.scss']
})
export class ServicesComponent implements OnInit {
  data: any;

    chartOptions: any;

   

    constructor() {}

  ngOnInit(): void {
    AOS.init({
      duration: 2450,
    });
    
  }

}
