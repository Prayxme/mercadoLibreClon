import { NgClass, NgIf } from '@angular/common';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-descripcion',
  standalone: true,
  imports: [NgIf, HeaderComponent, RouterLink, NgClass],
  templateUrl: './descripcion.component.html',
  styleUrl: './descripcion.component.css'
})
export class DescripcionComponent {
  
  productos: any;

  listaProductos = [
    {
      nombre: "Laptop HP 15.6 N3050",
      precio: 165,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_978153-MLV73850559102_012024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 0,
      ciudad: "Barquisimeto",
      seleccionado: false,
      color: 'Negro',
      unidad: 3,
      opiniones: 5
    },
    {
      nombre: "CHEFMAN Horno y Freidora Electrica",
      precio: 149,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_941802-MLA75462079330_042024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 1,
      ciudad: "Barquisimeto",
      seleccionado: false,
      color: 'Blanco',
      unidad: 7,
      opiniones: 4
    },
    {
      nombre: "Plancha de Ropa Semi-Industrial",
      precio: 98,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_793834-MLV75456560430_042024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 2,
      ciudad: "Barquisimeto",
      seleccionado: false,
      color: 'Plateado',
      unidad: 1,
      opiniones: 2
    },

    {
      nombre: "Plancha de Ropa Portatil a Vapor - Oster",
      precio: 50,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_608475-MLV72870386670_112023-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 3,
      ciudad: "San Cristobal",
      seleccionado: false,
      color: 'Negro',
      unidad: 3,
      opiniones: 5
    },

    {
      nombre: "Celular Sencillo Dual-Sim 4G LTE",
      precio: 19,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_639338-MLV73970267897_012024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 4,
      ciudad: "Distrito Capital",
      seleccionado: false,
      color: 'Azul',
      unidad: 9,
      opiniones: 5

    },

    {
      nombre: "Celular 4G Alcatel Dual-Sim 1GB Ram Android 11",
      precio: 47,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_941009-MLV73436449853_122023-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 5,
      ciudad: "Distrito Capital",
      seleccionado: false,
      color: 'Negro',
      unidad: 10,
      opiniones: 7
    },

    {
      nombre: "Mesa de Dibujo Portatil (0.60 x 0.40 Mts.)",
      precio: 90, 
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_610728-MLV42907842964_072020-O.webp",
      tipoEnvio: "Entrega a acordar con el vendedor",
      id: 6,
      ciudad: "San Felipe",
      seleccionado: false,
      color: 'Beige',
      unidad: 3,
      opiniones: 6
    },

    {
      nombre: "Aire Acondicionado de Ventana 5000 BTU",
      precio: 155,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_707949-MLV75195337413_032024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 7,
      ciudad: "Valencia",
      seleccionado: false,
      color: 'Blanco',
      unidad: 6,
      opiniones: 9
    },

    {
      nombre: "SMART TV TCL 32 Pulgadas HD HDR",
      precio: 135,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_911433-MLV72953402539_112023-O.webp",
      tipoEnvio: "Entrega a acordar con el vendedor",
      id: 8,
      ciudad: "Valencia",
      seleccionado: false,
      color: 'Negro',
      unidad: 15,
      opiniones: 8
    },

    {
      nombre: "TV Box Onn 4K UHD Streaming",
      precio: 39,
      imagenUrl: "https://http2.mlstatic.com/D_NQ_NP_664417-MLV74626295755_022024-O.webp",
      tipoEnvio: "Envío Gratis",
      id: 9,
      ciudad: "Los Teques",
      seleccionado: false,
      color: 'Blanco',
      unidad: 8,
      opiniones: 6
    }
    
  ];

  precioBolivares:any

  constructor(private route: ActivatedRoute, private router: Router) {
    this.route.params.subscribe(params => {
      const id = params['id'];
      // Utiliza el ID para mostrar el detalle del producto correspondiente
      this.productos = this.listaProductos.find(item => item.id === Number(id));
      this.precioBolivares = Math.round(this.listaProductos[id].precio * 36.39) 
      
    });
  }

}
