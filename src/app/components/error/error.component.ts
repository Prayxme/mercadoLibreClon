import { Component } from '@angular/core';
import { HeaderComponent } from "../header/header.component";
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-error',
  standalone: true,
  imports: [HeaderComponent, RouterLink],
  templateUrl: './error.component.html',
  styleUrl: './error.component.css'
})
export class ErrorComponent {

}
