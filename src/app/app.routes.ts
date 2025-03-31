import { Routes } from '@angular/router';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { Pag1Component } from './pag1/pag1.component';
import { CnhComponent } from './cnh/cnh.component';
import { IdentidadeComponent } from './identidade/identidade.component';
import { SaudeComponent } from './saude/saude.component';
import { PerfilComponent } from './perfil/perfil.component';
import { MeusDocumentosComponent } from './meus-documentos/meus-documentos.component';
import { authGuard, adminGuard } from './services/auth.guard';
import { IntroducaoComponent } from './introducao/introducao.component';


export const routes: Routes = [
  { path: '', component: IntroducaoComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'cnh', component: CnhComponent, canActivate: [authGuard] },
  { path: 'identidade', component: IdentidadeComponent, canActivate: [authGuard] },
  { path: 'saude', component: SaudeComponent, canActivate: [authGuard] },
  { path: 'perfil', component: PerfilComponent, canActivate: [authGuard] },
  { path: 'meus-documentos', component: MeusDocumentosComponent, canActivate: [adminGuard] },
  { path: '**', redirectTo: 'register' }
];
