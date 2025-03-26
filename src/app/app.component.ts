import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Pag1Component } from "./pag1/pag1.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Pag1Component],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'projeto-final';
}
