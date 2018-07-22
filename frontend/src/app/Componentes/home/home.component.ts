import { Component, OnInit } from '@angular/core';
import { Padre } from '../../Clases/padre';
import { PadreService } from '../../Servicios/padre.service';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { Hijo } from '../../Clases/hijo';
import { Observable, Subject } from 'rxjs';
import {
  debounceTime, distinctUntilChanged, switchMap
} from 'rxjs/operators';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  padres$:Observable<Padre[]>;
  hijos$:Observable<Hijo[]>;
  private searchTerms = new Subject<string>();
  selectedPadre: Padre;
  selectedHijo:Hijo
  padres:Padre[]
  hijos:Hijo[]

  flag:boolean=true
  constructor(
    private _padreService: PadreService,
    private _router:Router,
    private _route:ActivatedRoute) { }

    search(term: string): void {
      this.searchTerms.next(term);
      if(!term.trim()){
        this.flag=true
      }
      else{
        this.flag=false
      }

    }

  ngOnInit() {
    //this.getPadres()
    //
    // this.getHijos()
    this.padres$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._padreService.searchPadres(term)),

    );

    this.hijos$ = this.searchTerms.pipe(
      // wait 300ms after each keystroke before considering the term
      debounceTime(300),

      // ignore new term if same as previous term
      distinctUntilChanged(),

      // switch to new search observable each time the term changes
      switchMap((term: string) => this._padreService.searchHijos(term)),
    );



  }
  mostrarDetallePadre(padre:Padre):void{

    this._router.navigate(['/padre',padre.id]);
    this.selectedPadre=padre

  }
  getPadres(): void {
    this._padreService.getPadres()
      .subscribe(padres => this.padres = padres);
  }
  getHijos():void{
    this._padreService.getHijos()
      .subscribe(hijos => this.hijos = hijos);
    console.log(this.hijos)
  }

  mostrarDetalleHijo(hijo:Hijo):void{

    this._router.navigate(['/hijo',hijo.id]);
    this.selectedHijo=hijo

  }


}
