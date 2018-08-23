import {Component, OnInit} from '@angular/core';
import * as firebase from 'firebase';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  ngOnInit(): void {
    firebase.initializeApp({
      apiKey: 'AIzaSyB5K6a-UBsYccvN3mfZmekvcb_LIXn1LH0',
      authDomain: 'comprasapp-571a0.firebaseapp.com',
    });
  }
}
