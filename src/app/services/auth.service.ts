import { Injectable } from '@angular/core';

@Injectable({ providedIn: 'root' })
export class AuthService {
  private autenticado = false;
  private isAdmin = false;

  login(usuario: string, senha: string): boolean {
    if (usuario === 'admin' && senha === 'admin123') {
      this.autenticado = true;
      this.isAdmin = true;
      return true;
    }

    if (usuario === 'usuario' && senha === 'usuario123') {
      this.autenticado = true;
      this.isAdmin = false;
      return true;
    }

    return false;
  }

  logout() {
    this.autenticado = false;
    this.isAdmin = false;
  }

  estaAutenticado(): boolean {
    return this.autenticado;
  }

  ehAdmin(): boolean {
    return this.isAdmin;
  }
}
