import {Injectable} from '@angular/core';
import * as firebase from 'firebase';
import {Router, ActivatedRoute} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AutenticacionService {

  constructor(private activatedRoute: ActivatedRoute, private router: Router) {
  }

  registroUsuario(userdata) {
    firebase.auth().createUserWithEmailAndPassword(userdata.email, userdata.password).catch(error => {
      console.log(error);
    });
  }

  inicioSesion(userdata) {
    firebase.auth().signInWithEmailAndPassword(userdata.email, userdata.password).then(response => {
      console.log(response);
      this.router.navigate(['/inicio']);
    }).catch(error => {
      console.log(error);
    });
  }
}