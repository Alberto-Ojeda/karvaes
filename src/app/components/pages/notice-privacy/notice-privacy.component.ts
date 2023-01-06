import { Component, OnInit } from '@angular/core';
import * as AOS from 'aos';

@Component({
  selector: 'app-notice-privacy',
  templateUrl: './notice-privacy.component.html',
  styleUrls: ['./notice-privacy.component.scss']
})
export class NoticePrivacyComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    AOS.init({
      duration: 2450,
    })

}
}

