import {Component, Input, OnInit} from '@angular/core';
import {Usuario} from "./Clases/usuario";
import {PadreService} from "./Servicios/padre.service";
import {AuthService} from "./Servicios/auth.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements  OnInit{
  title = 'app';
  contadorCart=0
  @Input()usuario:Usuario
  constructor(private _padreService: PadreService,
              private _auth:AuthService){

  }

  ngOnInit() {


    this.getUsuario()
    this.contadorCart=this._padreService._contadorCart
    this.escucharCambiosContadorCart()

  }

  getUsuario(){
    this._padreService.getUsuario(1)
      .subscribe(usuario => this.usuario = usuario);

  }
  escucharCambiosContadorCart() {
    this._padreService
      .cambioContadorCart
      .subscribe(
        (contadorCart: number) => {
          this.contadorCart = contadorCart;
        }
      )
  }
}
