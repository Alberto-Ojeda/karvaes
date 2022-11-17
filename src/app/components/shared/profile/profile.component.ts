import { isDevMode } from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { UserModel } from '@app/models/user/user.module';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  constructor(
    public user: UserModel,
  ) {
    
console.log(this.user)
  }

  ngOnInit(): void {
  }

}
