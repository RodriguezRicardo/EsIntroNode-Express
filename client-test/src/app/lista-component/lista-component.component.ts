import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Lista } from './lista.model';

@Component({
  selector: 'app-lista-component',
  templateUrl: './lista-component.component.html',
  styleUrls: ['./lista-component.component.css']
})
export class ListaComponentComponent {
  data: Object;
  loading: boolean;
  o :Observable<Object>;

  listaData : Lista[];
  oLista : Observable<Lista[]>;
  constructor(public http: HttpClient) {}

  visualLista() : void {
    this.oLista = this.http.get<Lista[]>('https://3000-ca5a3b36-1d1e-451a-a5c0-10288a5235d3.ws-eu01.gitpod.io/api/products');
    this.oLista.subscribe(data => {this.listaData = data;});
  }

  getData = (d : Object) =>
  {
    this.data = d; //Notifico l’oggetto ricevuto dal server
    this.loading = false;  // Notifico che ho ricevuto i dati
  }

  ngOnInit() {}
}
