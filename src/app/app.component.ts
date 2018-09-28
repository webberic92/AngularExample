import { Component, OnInit } from '@angular/core';
import {NumverifyService} from './numverify.service';


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent{
  constructor(private numverify: NumverifyService){}
  public details;
  public phone: string;

  getPhoneDetails(){
    this.numverify.getDetails(this.phone).subscribe(response => {
      this.details = JSON.stringify(response);
    })

    console.log(this.phone);
  }
}