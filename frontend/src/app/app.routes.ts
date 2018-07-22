import {Routes} from "@angular/router";
import {AppComponent} from "./app.component";
import {DescripcionPadreComponent} from "./Componentes/descripcion-padre/descripcion-padre.component";
import {PadreComponent} from "./Componentes/padre/padre.component";
import {HijoComponent} from "./Componentes/hijo/hijo.component";
import {HomeComponent} from "./Componentes/home/home.component";
import {DescripcionHijoComponent} from "./Componentes/descripcion-hijo/descripcion-hijo.component";
import {CartComponent} from "./Componentes/cart/cart.component";
import {LoginComponent} from "./Componentes/login/login.component";
import {RegisterComponent} from "./Componentes/register/register.component";
import {AuthGuard} from "./Guards/auth.guard";

export const RUTAS_APP: Routes = [
  {
    path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  },
  {
    path:'home',
    component: HomeComponent,
  },
  {
    path:'padre/:id',
    component: DescripcionPadreComponent,
    children:[
      {path:'hijo/:id',component:DescripcionHijoComponent}

    ],
    canActivate:[AuthGuard]
  },
  {
    path:'hijo/:id',
    component:DescripcionHijoComponent,
    canActivate:[AuthGuard]

  },
  {
    path:'carrito',
    component:CartComponent,
    canActivate:[AuthGuard]
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'signup',
    component:RegisterComponent
  }



];
