import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoStorageService } from '../services/documento-storage.service';

@Component({
  selector: 'app-perfil',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './perfil.component.html',
  styleUrls: ['./perfil.component.css']
})
export class PerfilComponent implements OnInit {
  limparTodos() {
    this.storage.limparTodosDocumentos();
    alert('Todos os documentos foram apagados!');
    window.location.reload();
  }

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

  exportarJson() {
    const blob = new Blob([JSON.stringify(this.documentos, null, 2)], {
      type: 'application/json'
    });

    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'meus-documentos.json';
    a.click();
    URL.revokeObjectURL(url);
  }
}
