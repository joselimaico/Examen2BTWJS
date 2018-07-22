import {Component, Input, OnInit} from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {Location} from "@angular/common";
import {PadreService} from "../../Servicios/padre.service";
import {Hijo} from "../../Clases/hijo";

@Component({
  selector: 'app-descripcion-hijo',
  templateUrl: './descripcion-hijo.component.html',
  styleUrls: ['./descripcion-hijo.component.css']
})
export class DescripcionHijoComponent implements OnInit {

  @Input() hijo:Hijo
  contador:number=0
  constructor(private _service:PadreService,
              private route:ActivatedRoute,
              private _location: Location) {
  }

  ngOnInit() {
    this.getHijo()
  }

  getHijo(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.getHijo(id)
      .subscribe(hijo => this.hijo = hijo);
  }
  goBack(): void {
    this._location.back();
  }
  comprar():void{
    this.contador=this.contador+1
    console.log(this.contador)
    this._service.emitirCambioContadorCart(this.contador,'add')
    // this._location.back();
    const id = +this.route.snapshot.paramMap.get('id');
    this._service.updateHijo(id,this.hijo)
      .subscribe(() => this.goBack());
  }
}
