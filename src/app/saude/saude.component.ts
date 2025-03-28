import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentoStorageService } from '../services/documento-storage.service';

@Component({
  selector: 'app-saude',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saude.component.html'
})
export class SaudeComponent {
  constructor(private storage: DocumentoStorageService) {}

  saude = {
    nome: '',
    numeroSUS: '',
    dataNascimento: '',
    sexo: '',
    endereco: '',
    cpf: '',
    nomePais: '',
    condicoes: '',
    planoSaude: ''
  };

  enviar() {
    this.storage.salvarDocumento('saude', this.saude);
    alert('Carteira de saúde salva com sucesso!');
    this.saude = {} as any;
  }
}
