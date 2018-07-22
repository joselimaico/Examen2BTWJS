import {Component, Input, OnInit} from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {ActivatedRoute, ParamMap, Router} from "@angular/router";
import { Location } from '@angular/common';
import {Padre} from "../../Clases/padre";
import {Hijo} from "../../Clases/hijo";

@Component({
  selector: 'app-descripcion-padre',
  templateUrl: './descripcion-padre.component.html',
  styleUrls: ['./descripcion-padre.component.css']
})
export class DescripcionPadreComponent implements OnInit {


  @Input() padre:Padre
  selectedHijo:Hijo


  constructor(private _service:PadreService,
              private route:ActivatedRoute,
              private _router:Router,
              private _location: Location) {
  }

  ngOnInit() {

    this.getPadre()
  }


  getPadre(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getPadre(id)
      .subscribe(padre => this.padre = padre);
  }

  goBack(): void {
    this._location.back();
  }

  mostrarDetalleHijo(hijo:Hijo):void{

    this._router.navigate(['/hijo',hijo.id]);
    this.selectedHijo=hijo

  }


}


