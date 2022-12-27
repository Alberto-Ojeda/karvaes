import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class SendNotificationService {

  constructor(public httpclient:HttpClient) { }

  sendNotificationPost(formData){
    console.log('information data:' ,formData);
    this.httpclient.post('https://formsubmit.co/karvaesservicios@gmail.com',formData  )
    .subscribe(
      (response) => console.log("Response:",response),
      (error)=>console.log("Error:",error)
    )
  }
}
