import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';

@Injectable({ providedIn: 'root' })
export class DocumentoStorageService {
  constructor(private auth: AuthService) {}

  salvarDocumento(tipo: string, dados: any) {
    const usuario = this.auth.getUsuarioAtual()?.username;
    if (!usuario) return;

    const existentes = this.listarDocumentos(tipo);
    existentes.push({ ...dados, dono: usuario });
    localStorage.setItem(tipo, JSON.stringify(existentes));
  }

  listarDocumentos(tipo: string): any[] {
    const dados = localStorage.getItem(tipo);
    return dados ? JSON.parse(dados) : [];
  }

  listarPorUsuario(tipo: string, username: string): any[] {
    return this.listarDocumentos(tipo).filter(d => d.dono === username);
  }

  limparTodosDocumentos() {
    localStorage.removeItem('cnh');
    localStorage.removeItem('identidade');
    localStorage.removeItem('saude');
  }
}
