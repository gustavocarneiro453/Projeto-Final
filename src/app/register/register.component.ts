import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { UsuarioService } from '../services/usuario.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './register.component.html'
})
export class RegisterComponent {
  username = '';
  password = '';
  erro = '';

  constructor(private usuarioService: UsuarioService, private router: Router) {}

  registrar() {
    const sucesso = this.usuarioService.registrar({
      username: this.username,
      password: this.password,
      isAdmin: false
    });

    if (sucesso) {
      alert('Usuário cadastrado com sucesso!');
      this.router.navigate(['/login']);
    } else {
      this.erro = 'Usuário já existe!';
    }
  }
}
