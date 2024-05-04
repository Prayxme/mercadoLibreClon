import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from '../header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { NgModel } from '@angular/forms';
import { Router } from '@angular/router';
import { PreferenciasComponent } from "../preferencias/preferencias.component";
import { CatalogoComponent } from "../catalogo/catalogo.component";


@Component({
  selector: 'app-home',
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
    PreferenciasComponent,
    CatalogoComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  constructor(private modalService: NgbModal, private elementRef: ElementRef, private router: Router) {

  }

  public open(modal: any): void {

    this.modalService.open(modal);

  }


  productos = [
    {
      titulo: "Combo Pirulin de Chocolate Lata 190Gr de 2 Unidades",
      precio: "11$",
      tipoEnvio: "Envío gratis a todo el pais",
      imagen: "./assets/pirulin.webp"
    },
    {
      titulo: "Multimetro Digital Tester LCD",
      precio: "5$",
      tipoEnvio: "Envío gratis a todo el pais",
      imagen: "./assets/multimetro.webp"
    },
    {
      titulo: "Potente Cautin Soldador De Estaño Profes 110v",
      precio: "2$",
      tipoEnvio: "Envío gratis a todo el pais",
      imagen: "./assets/cautin.webp"
    },
    {
      titulo: "Laptop Lenovo E15 Gen2 Thinkpad 15.6 I5 8 Gb Ram 256 Gb Ssd",
      precio: "1.180$",
      tipoEnvio: "Envío express a todo el país",
      imagen: "./assets/lenovo.webp"
    },
    {
      titulo: "Disco Durso Crucial Ssd 1TB 2.5 Sata",
      precio: "90$",
      tipoEnvio: "Envío express a todo el país",
      imagen: "./assets/ssd.webp"
    }
  ];

  
}
