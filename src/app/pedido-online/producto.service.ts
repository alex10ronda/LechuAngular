import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';

import { Producto } from "./modelo/producto.model";



@Injectable({
  providedIn: 'root'
})
export class ProductoService {

  private basePath = "http://127.0.0.1:8080/el-lechuguita/productos";
  private pathListado = "/listaProductos";

  constructor(private http: HttpClient) { }

  getAllProductos():Observable<Producto[]>{
    return this.http.get<Producto[]>(this.basePath + this.pathListado);
  }
}
