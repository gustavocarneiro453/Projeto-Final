import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router'; 

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component {
  tipos = ['CNH', 'Identidade', 'Saúde'];
  filtroSelecionado: string = '';

  constructor(private router: Router) {}

  irParaFormulario() {
    if (this.filtroSelecionado === 'CNH') {
      this.router.navigate(['/cnh']);
    } else if (this.filtroSelecionado === 'Identidade') {
      this.router.navigate(['/identidade']);
    } else if (this.filtroSelecionado === 'Saúde') {
      this.router.navigate(['/saude']);
    }
  }
}
