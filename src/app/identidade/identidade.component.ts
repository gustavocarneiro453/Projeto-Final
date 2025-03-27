import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-identidade',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './identidade.component.html'
})
export class IdentidadeComponent {
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
    console.log('Dados do RG:', this.rg);
    alert('Identidade enviada com sucesso!');
  }
}
