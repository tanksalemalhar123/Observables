import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Rx';

@Injectable({
  providedIn: 'root'
})
export class ApiserviceService {
  postDtos$: Observable<PostDto[]>;
  postDtos: PostDto[];

  constructor(private http: HttpClient) {
   }

   getData(){
   return this.postDtos$ = <Observable<PostDto[]>>this.http.get('https://jsonplaceholder.typicode.com/users');
   }

}

export class PostDto {
  id: number;
  username: string;
}