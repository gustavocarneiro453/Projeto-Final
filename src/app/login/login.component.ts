import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './login.component.html'
})
export class LoginComponent {
  usuario = '';
  senha = '';
  erro = '';

  constructor(private auth: AuthService, private router: Router) {}

  entrar() {
    const sucesso = this.auth.login(this.usuario, this.senha);

    if (sucesso) {
      this.erro = '';
      this.router.navigate(['/perfil']);
    } else {
      this.erro = 'Usuário ou senha inválidos';
    }
  }
}
