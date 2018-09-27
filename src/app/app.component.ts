import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.css'],
})

export class AppComponent {
  title: string = 'Google Maps Example 2018';
  lat: number = 29.207033;
  lng: number = -81.057931;
}