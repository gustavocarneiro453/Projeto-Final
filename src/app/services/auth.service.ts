import { Injectable } from '@angular/core';
import { UsuarioService } from './usuario.service';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private usuarioLogado: any = null;

  constructor(private usuarioService: UsuarioService) {}

  login(username: string, password: string): boolean {
    const usuario = this.usuarioService.autenticar(username, password);
    if (usuario) {
      this.usuarioLogado = usuario;
      localStorage.setItem('usuarioAtual', JSON.stringify(usuario));
      return true;
    }
    return false;
  }

  logout() {
    this.usuarioLogado = null;
    localStorage.removeItem('usuarioAtual');
  }

  estaAutenticado(): boolean {
    return this.getUsuarioAtual() !== null;
  }

  ehAdmin(): boolean {
    const user = this.getUsuarioAtual();
    return user?.isAdmin || false;
  }

  getUsuarioAtual() {
    if (!this.usuarioLogado) {
      if (typeof window !== 'undefined' && localStorage) {
        const data = localStorage.getItem('usuarioAtual');
        this.usuarioLogado = data ? JSON.parse(data) : null;
      }
    }
    return this.usuarioLogado;
  }
}
