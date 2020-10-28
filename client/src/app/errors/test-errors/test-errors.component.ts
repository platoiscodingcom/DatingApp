import { HttpClient } from '@angular/common/http';
import { Component, ErrorHandler, OnInit } from '@angular/core';
import { error } from 'protractor';

@Component({
  selector: 'app-test-errors',
  templateUrl: './test-errors.component.html',
  styleUrls: ['./test-errors.component.css']
})
export class TestErrorsComponent implements OnInit {
  baseUrl = 'https://localhost:5001/api/';
  validationErrors: string[] = [];


  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  get404Error(){
    this.http.get(this.baseUrl + 'buggy/not-found').subscribe(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

  get400Error(){
    this.http.get(this.baseUrl + 'buggy/bad-request').subscribe(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

  get500Error(){
    this.http.get(this.baseUrl + 'buggy/server-error').subscribe(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

  get401Error(){
    this.http.get(this.baseUrl + 'buggy/auth').subscribe(res =>{
      console.log(res);
    }, err =>{
      console.log(err);
    })
  }

  get400ValidationError() {
    this.http.post(this.baseUrl + 'account/register', {}).subscribe(response => {
      console.log(response);
    }, error => {
      console.log(error);
      this.validationErrors = error;
    })
  }

}
