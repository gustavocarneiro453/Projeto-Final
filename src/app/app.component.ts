import { Component } from '@angular/core';
import { Pag1Component } from './pag1/pag1.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Pag1Component],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'projeto-final';
}
