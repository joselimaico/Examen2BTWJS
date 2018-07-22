import {Component, OnChanges, OnInit} from '@angular/core';
import {Padre} from "../../Clases/padre";
import {PadreService} from "../../Servicios/padre.service";
import {Hijo} from "../../Clases/hijo";
import {Router} from "@angular/router";
import {Usuario} from "../../Clases/usuario";
import {NgbModal,ModalDismissReasons} from "@ng-bootstrap/ng-bootstrap";
import {MatSnackBar} from "@angular/material";
import {MensajeComponent} from "../mensaje/mensaje.component";
import { Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  hijosCart:Hijo[]
  @Input()usuario:Usuario
  @Input() usuarioFactura:Usuario;
  nombre:string
  apellido:string
  correo:string
  direccion:string
  closeResult: string;
  contador:number=0

  resultados:number
  constructor(private _service:PadreService,
              private _router:Router,
              private modalService: NgbModal,
              public snackBar: MatSnackBar) {

  }

  ngOnInit() {
    this.getHijosCart()
   this.getUsuario()



  }
  open(content) {
    this.modalService.open(content, {ariaLabelledBy: 'modal-basic-title'}).result.then((result) => {
      this.closeResult = `Closed with: ${result}`;
    }, (reason) => {
      this.closeResult = `Dismissed ${this.getDismissReason(reason)}`;
    });
  }
  private getDismissReason(reason: any): string {
    if (reason === ModalDismissReasons.ESC) {
      return 'by pressing ESC';
    } else if (reason === ModalDismissReasons.BACKDROP_CLICK) {
      return 'by clicking on a backdrop';
    } else {
      return  `with: ${reason}`;
    }
  }

  getHijosCart():void{
    this._service.getHijosCart()
      .subscribe(hijosCart => {this.hijosCart = hijosCart
        this.sumarPrecio()});
    //console.log(this.hijos)
  }
  eliminarHijo(hijo:Hijo){
    //this.contador=this.contador+1
    //console.log('desde cart: ',1)
    this._service.emitirCambioContadorCart(1,'subs')
    //const id = +this.route.snapshot.paramMap.get('id');
    this._service.eliminarHijosCart(hijo.id).subscribe(
      () => this.getHijosCart()
    )

  }

  sumarPrecio(){
    this.resultados=0
     return this.hijosCart.map(
      (hijo:Hijo)=>{

        this.resultados= this.resultados+hijo.price
        console.log(this.resultados)
      }
    )
  }

  /*ngOnChanges(propiedadesActualizadas) {
    if(propiedadesActualizadas.getHijosCart()){
      this.sumarPrecio()
    }

  }*/

  getUsuario():void{
    this._service.getUsuario(1)
      .subscribe(usuario => {
        this.usuario = usuario
        this.nombre=this.usuario.nombre
        this.apellido=this.usuario.apellido
        this.correo=this.usuario.correo
        this.direccion=this.usuario.direccion
      });

  }
  openSnackBar(){
    this.snackBar.openFromComponent(MensajeComponent, {
      duration: 1000,
    });

  }



}


