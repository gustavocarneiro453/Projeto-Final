import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoStorageService } from '../services/documento-storage.service';
import { UsuarioService } from '../services/usuario.service';
import jsPDF from 'jspdf';


@Component({
  selector: 'app-meus-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meus-documentos.component.html',
  styleUrls: ['./meus-documentos.component.css']
})
export class MeusDocumentosComponent implements OnInit {
  usuarios: any[] = [];

  constructor(
    private storage: DocumentoStorageService,
    private usuarioService: UsuarioService
  ) {}

  ngOnInit(): void {
    this.usuarios = this.usuarioService.listar();
  }

  getCNH(user: string) {
    return this.storage.listarPorUsuario('cnh', user);
  }

  getIdentidade(user: string) {
    return this.storage.listarPorUsuario('identidade', user);
  }

  getSaude(user: string) {
    return this.storage.listarPorUsuario('saude', user);
  }

  gerarPdfCNH(dados: any) {
    const doc = new jsPDF();

    doc.setFontSize(18);
    doc.text('🪪 Documento: CNH', 10, 20);

    doc.setFontSize(12);
    doc.text(`Nome: ${dados.nome}`, 10, 35);
    doc.text(`CPF: ${dados.cpf}`, 10, 45);
    doc.text(`Categoria: ${dados.categoria}`, 10, 55);
    doc.text(`Validade: ${dados.validade}`, 10, 65);
    doc.text(`Número de Registro: ${dados.numeroRegistro}`, 10, 75);
    doc.text(`Endereço: ${dados.endereco}`, 10, 85);

    doc.save(`CNH-${dados.nome}.pdf`);
  }
}
