import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoStorageService } from '../services/documento-storage.service';
import jsPDF from 'jspdf';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  documentos: any = {
    cnh: [],
    identidade: [],
    saude: []
  };

  constructor(private storage: DocumentoStorageService) {}

  ngOnInit(): void {
    this.documentos.cnh = this.storage.listarDocumentos('cnh');
    this.documentos.identidade = this.storage.listarDocumentos('identidade');
    this.documentos.saude = this.storage.listarDocumentos('saude');
  }

  limparTodos() {
    this.storage.limparTodosDocumentos();
    alert('Todos os documentos foram apagados!');
    window.location.reload();
  }

  gerarPdfCNH(d: any) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('🪪 CNH Digital', 10, 20);
    doc.setFontSize(12);
    doc.text(`Nome: ${d.nome}`, 10, 35);
    doc.text(`CPF: ${d.cpf}`, 10, 45);
    doc.text(`Categoria: ${d.categoria}`, 10, 55);
    doc.text(`Validade: ${d.validade}`, 10, 65);
    doc.text(`Registro: ${d.numeroRegistro}`, 10, 75);
    doc.text(`Endereço: ${d.endereco}`, 10, 85);
    doc.save(`CNH-${d.nome}.pdf`);
  }

  gerarPdfIdentidade(d: any) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('🆔 Identidade', 10, 20);
    doc.setFontSize(12);
    doc.text(`Nome: ${d.nome}`, 10, 35);
    doc.text(`RG: ${d.numero}`, 10, 45);
    doc.text(`Data Emissão: ${d.dataEmissao}`, 10, 55);
    doc.text(`Órgão Emissor: ${d.orgaoEmissor}`, 10, 65);
    doc.text(`Naturalidade: ${d.naturalidade}`, 10, 75);
    doc.text(`Filiação: ${d.filiacao}`, 10, 85);
    doc.save(`RG-${d.nome}.pdf`);
  }

  gerarPdfSaude(d: any) {
    const doc = new jsPDF();
    doc.setFontSize(18);
    doc.text('❤️ Cartão de Saúde', 10, 20);
    doc.setFontSize(12);
    doc.text(`Nome: ${d.nome}`, 10, 35);
    doc.text(`Nº SUS: ${d.numeroSUS}`, 10, 45);
    doc.text(`CPF: ${d.cpf}`, 10, 55);
    doc.text(`Condições: ${d.condicoes}`, 10, 65);
    doc.text(`Plano de Saúde: ${d.planoSaude}`, 10, 75);
    doc.save(`Saude-${d.nome}.pdf`);
  }
}
