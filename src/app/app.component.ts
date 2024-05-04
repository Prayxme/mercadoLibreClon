import { Component, CUSTOM_ELEMENTS_SCHEMA, ElementRef } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { HeaderComponent } from './components/header/header.component';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatButtonModule} from '@angular/material/button';
import {MatDividerModule} from '@angular/material/divider';
import {MatCardModule} from '@angular/material/card';
import { NgClass, NgFor, NgIf, NgStyle } from '@angular/common';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';

// import { MdbCarouselModule } from 'mdb-angular-ui-kit/carousel';



@Component({
  selector: 'app-root',
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
    ReactiveFormsModule
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class AppComponent {

}
