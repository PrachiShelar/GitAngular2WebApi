import { Injectable } from '@angular/core';
import { Http, Response,Headers, RequestOptions } from '@angular/http';
import 'rxjs/Rx';
import { Observable } from 'rxjs/Observable'; 
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
@Injectable()

export class UserService {

   constructor(private http: Http) {}

   getData() {
          return this.http.get("app/service/data.json")
             .map(res => res.json())
     }
   get(url: string): Observable<any> {
       return this.http.get(url)
           .map((response: Response) => <any>response.json())
           .catch(this.handleError);
   }


   private handleError(error: Response) {
       console.error(error);
       return Observable.throw(error.json().data || 'Server error');
   }       
 
}

    //get(url: string): Observable<any> {
    //    return this._http.get("api/userapi/GetNumberToWord/")
    //        .map((response: Response) => <any>response.json())
    //        .catch(this.handleError);
    //}

 