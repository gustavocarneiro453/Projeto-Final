import { Injectable } from '@angular/core';

interface Usuario {
  username: string;
  password: string;
  isAdmin: boolean;
}

@Injectable({ providedIn: 'root' })
export class UsuarioService {
  private readonly storageKey = 'usuarios';

  constructor() {
    this.inicializarAdmin(); // ✅ Admin criado automaticamente
  }

  registrar(usuario: Usuario): boolean {
    const usuarios = this.listar();
    const existe = usuarios.find(u => u.username === usuario.username);

    if (existe) return false;

    usuarios.push(usuario);
    localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
    return true;
  }

  listar(): Usuario[] {
    const data = localStorage.getItem(this.storageKey);
    return data ? JSON.parse(data) : [];
  }

  autenticar(username: string, password: string): Usuario | null {
    const usuarios = this.listar();
    return usuarios.find(u => u.username === username && u.password === password) || null;
  }

  private inicializarAdmin(): void {
    const usuarios = this.listar();
    const jaExisteAdmin = usuarios.some(u => u.isAdmin);

    if (!jaExisteAdmin) {
      const admin: Usuario = {
        username: 'admin',
        password: 'admin123',
        isAdmin: true
      };
      usuarios.push(admin);
      localStorage.setItem(this.storageKey, JSON.stringify(usuarios));
      console.log('✅ Admin padrão criado: admin / admin123');
    }
  }
}
