import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DocumentoStorageService {
  salvarDocumento(tipo: string, dados: any) {
    const existentes = this.listarDocumentos(tipo);
    existentes.push(dados);
    localStorage.setItem(tipo, JSON.stringify(existentes));
  }

  listarDocumentos(tipo: string): any[] {
    const dados = localStorage.getItem(tipo);
    return dados ? JSON.parse(dados) : [];
  }

  limparDocumentos(tipo: string) {
    localStorage.removeItem(tipo);
  }
}
