import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'client-test';
  products : string[];


  constructor(private http: HttpClient) {}

  ngOnInit() : void {
      this.http.get('https://3000-ca5a3b36-1d1e-451a-a5c0-10288a5235d3.ws-eu01.gitpod.io/api/products').subscribe(data => {
      this.products = data['products'];
    });
  }

}
