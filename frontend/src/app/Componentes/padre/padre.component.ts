import { Component, OnInit } from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Padre} from "../../Clases/padre";

@Component({
  selector: 'app-padre',
  templateUrl: './padre.component.html',
  styleUrls: ['./padre.component.css']
})
export class PadreComponent implements OnInit {

 //padres = []
  padres:Padre[];
  selectedPadre: Padre
  isCollapsed:boolean=true
  constructor(private _padreService: PadreService,
              private _router:Router,
              private _route:ActivatedRoute) { }

  ngOnInit() {

    this.getPadres()

  }
  mostrarDetallePadre(padre:Padre):void{

    this._router.navigate(['/padre',padre.id]);
    this.selectedPadre=padre

  }
  getPadres(): void {
    this._padreService.getPadres()
      .subscribe(padres => this.padres = padres);
  }

}
