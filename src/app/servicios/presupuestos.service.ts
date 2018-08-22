import {Injectable} from '@angular/core';
import {Headers, Http, Response} from '@angular/http';
import {map, filter, switchMap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class PresupuestosService {

  presURL = 'https://comprasapp-571a0.firebaseio.com/presupuestos.json';

  constructor(private http: Http) {
  }

  postPresupuesto(presupuesto: any) {
    const newpres = JSON.stringify(presupuesto);
    const headers = new Headers({
      'Content-Type': 'application/json'
    });

    return this.http.post(this.presURL, newpres, {headers}).pipe(
      map(res => {
        console.log(res.json());
        return res.json();
      }));
  }

  getPresupuestos() {
    return this.http.get(this.presURL).pipe(map(res => res.json()));
  }
}
