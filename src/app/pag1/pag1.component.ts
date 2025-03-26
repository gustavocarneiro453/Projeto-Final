import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

interface Documento {
  tipo: string;
  nome: string;
  descricao: string;
}

@Component({
  selector: 'app-pag1',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './pag1.component.html',
  styleUrls: ['./pag1.component.css']
})
export class Pag1Component {
  tipos = ['Todos', 'CNH', 'Identidade', 'Saúde'];
  filtroSelecionado: string = 'Todos';

  documentos: Documento[] = [
    { tipo: 'CNH', nome: 'CNH João', descricao: 'Carteira de motorista de João' },
    { tipo: 'Identidade', nome: 'RG Maria', descricao: 'Documento de identidade da Maria' },
    { tipo: 'Saúde', nome: 'Cartão SUS Pedro', descricao: 'Carteira de saúde do Pedro' },
    { tipo: 'CNH', nome: 'CNH Ana', descricao: 'Carteira de motorista da Ana' },
  ];

  get documentosFiltrados(): Documento[] {
    if (this.filtroSelecionado === 'Todos') {
      return this.documentos;
    }
    return this.documentos.filter(doc => doc.tipo === this.filtroSelecionado);
  }
}
