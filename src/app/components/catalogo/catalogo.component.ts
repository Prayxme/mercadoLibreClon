import { Component, ElementRef } from '@angular/core';
import { RouterOutlet, Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { CarritoComponent } from "../carrito/carrito.component";

@Component({
  selector: 'app-catalogo',
  standalone: true,
  imports: [RouterOutlet, 
    HeaderComponent, 
    MatCardModule, 
    MatDividerModule, 
    MatButtonModule, 
    MatProgressBarModule,
    NgFor,
    NgIf,
    NgClass,
    NgStyle, 
    CarritoComponent
  ],
  templateUrl: './catalogo.component.html',
  styleUrl: './catalogo.component.css'
})
export class CatalogoComponent {

  constructor(private router: Router, private elementRef: ElementRef){

  }

  listaProductos = [
    {
      nombre: "Laptop HP 15.6 N3050",
      precio: 165,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_978153-MLV73850559102_012024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 0,
      ciudad: "Barquisimeto",
      seleccionado: false
    },
    {
      nombre: "CHEFMAN Horno y Freidora Electrica",
      precio: 149,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_941802-MLA75462079330_042024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 1,
      ciudad: "Barquisimeto",
      seleccionado: false
    },
    {
      nombre: "Plancha de Ropa Semi-Industrial",
      precio: 98,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_793834-MLV75456560430_042024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 2,
      ciudad: "Barquisimeto",
      seleccionado: false
    },

    {
      nombre: "Plancha de Ropa Portatil a Vapor - Oster",
      precio: 50,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_608475-MLV72870386670_112023-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 3,
      ciudad: "San Cristobal",
      seleccionado: false
    },

    {
      nombre: "Celular Sencillo Dual-Sim 4G LTE",
      precio: 19,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_639338-MLV73970267897_012024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 4,
      ciudad: "Distrito Capital",
      seleccionado: false

    },

    {
      nombre: "Celular 4G Alcatel Dual-Sim 1GB Ram Android 11",
      precio: 47,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_941009-MLV73436449853_122023-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 5,
      ciudad: "Distrito Capital",
      seleccionado: false
    },

    {
      nombre: "Mesa de Dibujo Portatil (0.60 x 0.40 Mts.)",
      precio: 90, 
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_610728-MLV42907842964_072020-O.webp",
      tipoEnvio: "Entrega a acordar con el vendedor",
      id: 6,
      ciudad: "San Felipe",
      seleccionado: false
    },

    {
      nombre: "Aire Acondicionado de Ventana 5000 BTU",
      precio: 155,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_707949-MLV75195337413_032024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 7,
      ciudad: "Valencia",
      seleccionado: false
    },

    {
      nombre: "SMART TV TCL 32 Pulgadas HD HDR",
      precio: 135,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_911433-MLV72953402539_112023-O.webp",
      tipoEnvio: "Entrega a acordar con el vendedor",
      id: 8,
      ciudad: "Valencia",
      seleccionado: false
    },

    {
      nombre: "TV Box Onn 4K UHD Streaming",
      precio: 39,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_664417-MLV74626295755_022024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 9,
      ciudad: "Los Teques",
      seleccionado: false
    }
    
  ];

  //creamos un nuevo objeto para almacenar en esta una copia de los objetos segun el indice del arreglo de listaProductos
  productoSeleccionado ={
      nombre: "",
      precio: 0,
      imagenUrl: "",
      tipoEnvio: "",
      id: 0,
      ciudad: "",
      seleccionado: false
  }

  //obtenemos todos las cards con la clase productBox
  cardProductos = this.elementRef.nativeElement.querySelectorAll(".productBox");

  //creamos una variable para que mute su valor al dar click, sera usada en el ngcontainer para condicionar que se muestre la informacion adicional si y solo si la variable seleccion es true
  seleccion:boolean = false

  //funcion click principal, recibimos index, booleano que controla el valor de la variable seleccion y la variable de referencia de la card a la cual se le ha dado click.


  /*
  verInfo(index:any, e:boolean, card:any){
    console.log(index);

    //ciclo para cada card se aplica la siguiente condicion
    this.cardProductos.forEach((cardProducto: any) => {
      //si algun id de las cards almacenadas en cardProducto es igual al id de la card a la cual se le ha dado click entonces aplicamos un style auto a esa card para que el contenido condicionado en el html no desborde el contenedor, de otro modo el resto de las cards obtendran un height de 45vh. 
      
      
      // cardProducto.setAtrribute('seleccionado', this.listaProductos[index].seleccionado)
  
      //Usamos la variable de referencia #card para pasarla por parametro a la funcion y obtener el id de la card a la cual se le ha hecho click.
      if (cardProducto.getAttribute('id') === card.getAttribute('id')) {
        cardProducto.style.height = 'auto';
        cardProducto.setAttribute('seleccionado', 'true')
  
      } else {
        cardProducto.style.height = '45vh';
        cardProducto.setAttribute('seleccionado', 'false')
      }
    });

    //asignamos e, el cual cambiara el valor de la variable seleccion por true o false segun se de click
    this.seleccion = e;

    //hacemos una copia del arreglo de lista productos, le pasamos el indice recibido por parametro y guardamos los datos de ese indice del arreglo en productoSeleccionado para mostrar esa informacion especifica en ngContainer y el atributo seleccionado recibira si y solo si el valor del atributo de las cards seteado previamente llamado "seleccionado" es true, para que asi de esta manera se pueda mostrar en contenido extra de las cards con ngContainer
    this.productoSeleccionado = {
      ...this.listaProductos[index],
      seleccionado: card.getAttribute('seleccionado') === 'true' 
    }
    //*NOTA IMPORTANTE* el codigo anterior de "this.productoSeleccionado" otorga la funcionalidad de que al dar click en una card esta despliega el contenido adicional con normalidad, aunque hace falta dar otro click adicional para que la card en cuestion se cierre y pueda darse click a otra card y mostrar la informacion de esa otra card y asi sucesivamente. Si removemos la parte del codigo que dice "&& this.seleccion" esto permitira navegar y mostrar la informacion de una card a la vez, es decir que si se da click en una card esta se abrira, si se da click en otra card, la siguiente se abrira y la anterior se va a cerrar y asi sucesivamente con tan solo un click entre ellas, la desventaja es que al final siempre quedara una card mostrando su contenido adicional, ya que al dar click sobre la misma card esta misma no se va a cerrar debido a la parte del codigo que fue removido... 
    

    // this.router.navigate(['/descripcion', this.productoSeleccionado.id]);

    if (this.seleccion) {
      this.productosSeleccionados.push(this.listaProductos[index])
    }else{
      const selectedIndex = this.productosSeleccionados.findIndex(producto => producto.id === index);

      if (selectedIndex !== -1) {
        this.productosSeleccionados.splice(selectedIndex, 1);
      }
    };
  }
  */

  verInfo(index: any, e: boolean, card: any) {
    console.log(index);
  
    if (this.seleccion) {
      this.cardProductos.forEach((cardProducto: any) => {
        if (cardProducto.getAttribute('id') === card.getAttribute('id')) {
          cardProducto.style.height = 'auto';
          cardProducto.setAttribute('seleccionado', 'true');
        } else {
          cardProducto.style.height = '45vh';
          cardProducto.setAttribute('seleccionado', 'false');
        }
      });
  
      this.productoSeleccionado = {
        ...this.listaProductos[index],
        seleccionado: card.getAttribute('seleccionado') === 'true' 
      };
  
      if (this.seleccion) {
        this.productosSeleccionados.push(this.listaProductos[index]);
      } else {
        const selectedIndex = this.productosSeleccionados.findIndex(producto => producto.id === index);
  
        if (selectedIndex !== -1) {
          this.productosSeleccionados.splice(selectedIndex, 1);
        }
      }
    }
  
    this.seleccion = e;
  }



  productosSeleccionados: any[] = []

}
