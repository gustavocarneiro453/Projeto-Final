import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { DocumentoStorageService } from '../services/documento-storage.service';

@Component({
  selector: 'app-identidade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './identidade.component.html'
})
export class IdentidadeComponent {
  constructor(private storage: DocumentoStorageService) {}

  rg = {
    nome: '',
    numero: '',
    dataNascimento: '',
    sexo: '',
    naturalidade: '',
    filiacao: '',
    cpf: '',
    estado: '',
    assinatura: '',
    dataEmissao: '',
    orgaoEmissor: ''
  };

  enviar() {
    this.storage.salvarDocumento('identidade', this.rg);
    alert('Identidade salva com sucesso!');
    this.rg = {} as any;
  }
}
