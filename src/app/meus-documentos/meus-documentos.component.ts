import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DocumentoStorageService } from '../services/documento-storage.service';
import { UsuarioService } from '../services/usuario.service';

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
}
