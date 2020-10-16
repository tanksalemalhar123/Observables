import { Component, OnInit, Input, EventEmitter } from '@angular/core';
import { ApiserviceService } from '../apiservice.service';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { Router } from '@angular/router';
import swal from 'sweetalert';
import { IfStmt } from '@angular/compiler';

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
  todos:any;
  new_id: any;

  public form: FormGroup;
  totalcount: any;

  constructor(private _http: HttpClient,public apiService:ApiserviceService,private fb: FormBuilder) {

  }
  ngOnInit(){
    this.form = this.fb.group({
      title:[null,Validators.compose([Validators.required])],
      desciption:[null,Validators.compose([Validators.required])],
      new_title: null
    
    });
   

    this.onMethod1();
    


  }


  createTodo(title,description){
  
    let data = {
      id: this.new_id + 1,
      title: title,
      description: this.form.controls.desciption.value
    }


    if(this.totalcount < 10){
      this._http.post<any>("https://starkflow-apis.herokuapp.com/addTodo",data).subscribe(response=>{
        console.log(response)
        
      },error=>{
       // console.log(error)
      })
      swal("Added to ToDo List","Please click on the refresh button","success")
  
     // this.refreshToDo()
       this.form.controls['title'].setValue("")
       this.form.controls['desciption'].setValue("")
    }
    else{
      swal("At a Time more than 10 Todo's cannot be made","","error")
    }
    
  
   
  }


  deleteTodo(id){
    this.apiService.deleteFromTodoList(id).subscribe(response => {
     
    });
    swal("Deleted From ToDo List","Please click on the refresh button","success")

     
  }


  refreshToDo(){
    this.onMethod1()
  }


  onMethod1() {
    this.apiService.getLastRecordId().subscribe(response => {
      
      if(response[0].id){
        this.new_id = response[0].id;
      }
      else{
        this.new_id = 1
      }
    });


    this.apiService.getAllTodosList().subscribe(response => {
      this.todos = response;
    });

    this.apiService.getCountList().subscribe(response => {
      this.totalcount = response[0].count;
     
    });



  }



}



