import { Injectable } from '@angular/core';
import {HttpClient, HttpParams} from "@angular/common/http";
import {of} from "rxjs/internal/observable/of";
import {map} from "rxjs/operators";

const PARAMS = new HttpParams({
  fromObject: {
    action: 'opensearch',
    format: 'json',
    origin: '*'
  }
});
@Injectable({
  providedIn: 'root'
})
export class FindService {
  private _padreUrl = "http://localhost:1337/api/padres";


  constructor(private http: HttpClient) {

  }
  search(term: string) {
    if (term === '') {
      return of([]);
    }
    return this.http
      .get<any>(this._padreUrl)
       //.pipe(map(response => response[1]));
  }
}
