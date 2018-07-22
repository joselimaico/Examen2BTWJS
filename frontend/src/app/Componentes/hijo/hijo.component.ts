import {Component, Input, OnInit} from '@angular/core';
import {PadreService} from "../../Servicios/padre.service";
import {Hijo} from "../../Clases/hijo";
import {ActivatedRoute, Router} from "@angular/router";
import {Padre} from "../../Clases/padre";

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrls: ['./hijo.component.css']
})

export class HijoComponent implements OnInit {

  hijos:Hijo[]
  selectedHijo:Hijo
  isCollapsed:boolean=true
  constructor(private _service: PadreService,
              private route:ActivatedRoute,
              private _router:Router) { }

  ngOnInit() {


      this.getHijos()




  }

  getHijos():void{
    this._service.getHijos()
      .subscribe(hijos => this.hijos = hijos);
    console.log(this.hijos)
  }

  mostrarDetalleHijo(hijo:Hijo):void{

    this._router.navigate(['/hijo',hijo.id]);
    this.selectedHijo=hijo

  }

}
