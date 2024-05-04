import { NgFor, NgIf } from '@angular/common';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-carrito',
  standalone: true,
  imports: [NgFor, NgIf],
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent {
  constructor(){
    console.log(this.productos)
  }

  @Input() productos: any[] = [];

  eliminarProducto(index:number){
    this.productos.splice(index,1);
    console.log(this.productos)
  }

  calcularPrecioTotal(): number{
    let total = 0
    for(let producto of this.productos){
      total +=producto.precio
    }
    return total;
  }
}
