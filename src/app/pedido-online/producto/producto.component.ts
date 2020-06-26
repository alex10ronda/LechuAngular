import { Component, OnInit } from '@angular/core';

import { ProductoService } from "./../producto.service";
import { Producto } from "./../modelo/producto.model";


@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.scss']
})
export class ProductoComponent implements OnInit {

  productos:Array<any>

  constructor(private productoService: ProductoService) { }

  ngOnInit(): void {
      this.productoService.getAllProductos().subscribe(data => {
        this.productos = data;
    });

  }

}
