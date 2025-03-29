import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(
    private auth: AuthService,
    private router: Router
  ) {}

  sair() {
    this.auth.logout();
    this.router.navigate(['/login']);
  }

  estaLogado(): boolean {
    return this.auth.estaAutenticado();
  }

  ehAdmin(): boolean {
    return this.auth.ehAdmin();
  }
}
