import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatInputModule} from '@angular/material/input';
import { MatFormFieldModule} from '@angular/material/form-field';
import { FormsModule } from '@angular/forms';



import { ProductoComponent } from './producto/producto.component';

import { ProductoService } from './producto.service';


@NgModule({
  declarations: [ProductoComponent],
  imports: [
    CommonModule,
    MatFormFieldModule,
    MatInputModule,
    FormsModule
  ],
  providers:[
    ProductoService
  ],
  exports:[
    ProductoComponent
  ]
})
export class PedidoOnlineModule { }
