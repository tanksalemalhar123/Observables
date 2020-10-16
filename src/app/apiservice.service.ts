import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {

 

  getLastRec$: Observable<GetLastRecord[]>;
  getLastRec: GetLastRecord[];

  getAllTodos$: Observable<GetAllTodos[]>;
  getAllTodos: GetAllTodos[];

  deletFromTodo$: Observable<DeleteFromTodo[]>;
  deletFromTodo: DeleteFromTodo[];


  createTodo$: Observable<CreateTodo[]>;
  createTodo: CreateTodo[];

  getCount$: Observable<GetCount[]>;
  getCount: GetCount[];


  constructor(private http: HttpClient) {
   }



  getCountList() {
    return this.getCount$ = <Observable<GetCount[]>>this.http.get('https://starkflow-apis.herokuapp.com/getcount');
  }

   getLastRecordId(){
    return this.getLastRec$ = <Observable<GetLastRecord[]>>this.http.get('https://starkflow-apis.herokuapp.com/getLastRecordId');
    }

    getAllTodosList(){
      return this.getAllTodos$ = <Observable<GetAllTodos[]>>this.http.get('https://starkflow-apis.herokuapp.com/getAllTodos');
    }



    deleteFromTodoList(id){
      let data = {
        id: id
      }
      return this.deletFromTodo$ = <Observable<DeleteFromTodo[]>>this.http.post('https://starkflow-apis.herokuapp.com/deleteTodo',data);
    }


    // addinTodo(id,title,description){
    //   let data = {
    //     id: id + 1,
    //     title: title,
    //     description: description
    //   }
    //   return this.deletFromTodo$ = <Observable<CreateTodo[]>>this.http.post('https://starkflow-apis.herokuapp.com/addTodo',data);
    // }

}

export class GetAllTodos {
  id: number;
  title: any;
  description:any;
}

export class GetLastRecord {
  id: any;
 
}


export class DeleteFromTodo {
  id: any;
 
}


export class CreateTodo {
  id: any;
  title:any;
  description:any;
}



export class GetCount {
  count: any;
 
}