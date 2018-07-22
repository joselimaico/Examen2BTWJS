import {EventEmitter, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Padre} from "../Clases/padre";
import { Observable, of } from 'rxjs';
import {catchError,map,tap} from "rxjs/operators";
import {Hijo} from "../Clases/hijo";
import {Usuario} from "../Clases/usuario";

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};
@Injectable(
   {providedIn: 'root'}
  )
export class PadreService {
  private _padresUrl = "http://localhost:1337/api";
  private _hijoUrl = "http://localhost:1337/aplicaciones?cart=false";
  private _hijo="http://localhost:1337/aplicaciones"
  private _usuarioUrl="http://localhost:1337/usuario"
  private _hijoCart="http://localhost:1337/aplicaciones?cart=true"
   _contadorCart:number=0
  cambioContadorCart: EventEmitter<number> = new EventEmitter();

  constructor(private http: HttpClient) {

  }
  emitirCambioContadorCart(contador:number,key:string) {
    if(key==='add'){
      this._contadorCart = this._contadorCart+contador ;
    }
    else if(key==='subs'){
      this._contadorCart = this._contadorCart-contador ;
    }

    this.cambioContadorCart.emit(this._contadorCart);
  }

  getPadres():Observable<Padre[]> {
    return this.http.get<Padre[]>(this._padresUrl)
      // .pipe(
      //   tap(heroes => this.log('fetched heroes')),
      //   catchError(this.handleError('getPadres', []))
      // );
    //return of(PADRES)
  }

  getPadre(id: number): Observable<Padre> {
    // TODO: send the message _after_ fetching the hero
    const url = `${this._padresUrl}/${id}`;
    console.log(url)
    return this.http.get<Padre>(url)

    //return of(PADRES.find(padre => padre._id === id));
  }



   getHijos():Observable<Hijo[]>{
     return this.http.get<Hijo[]>(this._hijoUrl)
   }

   getUsuario(id:number):Observable<Usuario>{
     const url=`${this._usuarioUrl}/${id}`
     return this.http.get<Usuario>(url)
   }
   getUsuarioFactura(id:number):Observable<Usuario>{
     const url=`${this._usuarioUrl}/${id}`
    return this.http.get<Usuario>(url)
   }

   getHijo(id:number):Observable<Hijo>{
    const url=`${this._hijo}/${id}`
     return this.http.get<Hijo>(url)
   }
  updateHijo (id:number,hijo: Hijo): Observable<any> {
    const url = `${this._hijo}/${id}`
    let bodyObj = {

      id: id,
      cart: true
    };
    return this.http.put(url, JSON.stringify(bodyObj), httpOptions)
      // .pipe(
      // tap(_ => this.log(`updated hero id=${hero.id}`)),
      // catchError(this.handleError<any>('updateHero'))
      // );
  }
  getHijosCart():Observable<Hijo[]>{
    return this.http.get<Hijo[]>(this._hijoCart)
  }
  eliminarHijosCart (id:number): Observable<any> {
    const url = `${this._hijo}/${id}`
    let bodyObj = {

      id: id,
      cart: false
    };
    return this.http.put(url, JSON.stringify(bodyObj), httpOptions)
    // .pipe(
    // tap(_ => this.log(`updated hero id=${hero.id}`)),
    // catchError(this.handleError<any>('updateHero'))
    // );
  }
  /* GET heroes whose name contains search term */
searchPadres(term: string): Observable<Padre[]> {
  const url =`${this._padresUrl}/?where={"name":{"contains":"${term}"}}`
  console.log(url)
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Padre[]>(url)
  //.pipe(
  //  tap(_ => this.log(`found heroes matching "${term}"`)),
  //  catchError(this.handleError<Hero[]>('searchHeroes', []))
  //);
}

searchHijos(term: string): Observable<Hijo[]> {
  const url =`${this._hijo}/?where={"name":{"contains":"${term}"}}`
  console.log(url)
  if (!term.trim()) {
    // if not search term, return empty hero array.
    return of([]);
  }
  return this.http.get<Hijo[]>(url)
  //.pipe(
  //  tap(_ => this.log(`found heroes matching "${term}"`)),
  //  catchError(this.handleError<Hero[]>('searchHeroes', []))
  //);
}

}
