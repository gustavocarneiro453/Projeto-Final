import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentoStorageService } from '../services/documento-storage.service'; // caminho correto

@Component({
  selector: 'app-cnh',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './cnh.component.html'
})
export class CnhComponent {
  constructor(private storage: DocumentoStorageService) {}

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
    this.storage.salvarDocumento('cnh', this.cnh);
    alert('CNH salva com sucesso!');
    this.cnh = {} as any; // limpa o formulário
  }
}
