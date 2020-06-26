import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductoComponent } from './producto/producto.component';

import { ProductoService } from './producto.service';


@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule
  ],
  providers:[
    ProductoService
  ],
  exports:[
    ProductoComponent
  ]
})
export class PedidoOnlineModule { }
