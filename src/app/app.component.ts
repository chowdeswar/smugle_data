import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'app works!';
  private apiUrl = "https://address-book-demo.herokuapp.com/api/contacts";
  data: any = {};

  constructor(private http: Http) {
    console.log('Hello fellow user');
    this.getData();
    this.getContacts();
  }

  getData() {
    return this.http.get(this.apiUrl)
      .map((res: Response) => res.json())
  }

  getContacts() {
    return this.getData().subscribe(data => {
      this.data = data;
    })
  }

  ngOnInit() {

  }





}
