import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-cnh',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cnh.component.html'
})
export class CnhComponent {
  cnh = {
    nome: '',
    numero: '',
    dataNascimento: '',
    sexo: '',
    naturalidade: '',
    endereco: '',
    cpf: '',
    dataExpedicao: '',
    validade: '',
    categoria: '',
    tipoHabilitacao: '',
    numeroRegistro: '',
    exames: '',
    observacoes: ''
  };

  enviar() {
    console.log('Dados da CNH:', this.cnh);
    alert('CNH enviada com sucesso!');
  }
}
