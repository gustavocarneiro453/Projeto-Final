import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-saude',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './saude.component.html'
})
export class SaudeComponent {
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
    console.log('Dados de Saúde:', this.saude);
    alert('Carteira de Saúde enviada com sucesso!');
  }
}
