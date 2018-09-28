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
  public detailsObject;
  public phone: string;

  getPhoneDetails(){
    this.numverify.getDetails(this.phone).subscribe(response => {
      this.detailsObject = response;
      this.details = JSON.stringify(this.detailsObject);
    })
    this.phone = "";
    console.log(this.phone);
  }

  numberOnly(event): boolean {
    const charCode = (event.which) ? event.which : event.keyCode;
    if (charCode > 31 && (charCode < 48 || charCode > 57)) {
      return false;
    }
    return true;

  }
}