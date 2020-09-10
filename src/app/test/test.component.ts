import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';

export interface Config {
  title: string;
  body: string;
}



@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styles: ['./test.component.css']
})
export class TestComponent implements OnInit {
  method1: boolean;
  myResponse: any;
  myData: any;

  constructor(private _http: HttpClient,public apiService:ApiserviceService) {

  }
  ngOnInit(){
    this.onMethod1();
  }


  onMethod1() {
    this.apiService.getData().subscribe(response => {
      this.myData = response
     
    });
  }
}



