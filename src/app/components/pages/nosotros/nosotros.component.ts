import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';


@Component({
  selector: 'app-nosotros',
  templateUrl: './nosotros.component.html',
  styleUrls: ['./nosotros.component.scss']
})
export class NosotrosComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2450,
    });
  }

}
