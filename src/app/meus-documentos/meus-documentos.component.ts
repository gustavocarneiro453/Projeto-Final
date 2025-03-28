import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoStorageService } from '../services/documento-storage.service';

@Component({
  selector: 'app-meus-documentos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './meus-documentos.component.html',
  styleUrls: ['./meus-documentos.component.css']
})
export class MeusDocumentosComponent implements OnInit {
  cnhs: any[] = [];
  identidades: any[] = [];
  saudes: any[] = [];

  constructor(private storage: DocumentoStorageService) {}

  ngOnInit(): void {
    this.cnhs = this.storage.listarDocumentos('cnh');
    this.identidades = this.storage.listarDocumentos('identidade');
    this.saudes = this.storage.listarDocumentos('saude');
  }
}
