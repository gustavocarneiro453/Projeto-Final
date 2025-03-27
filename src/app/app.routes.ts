import { Routes } from '@angular/router';
import { Pag1Component } from './pag1/pag1.component';
import { CnhComponent } from './cnh/cnh.component';
import { IdentidadeComponent } from './identidade/identidade.component';
import { SaudeComponent } from './saude/saude.component';

export const routes: Routes = [
  { path: '', component: Pag1Component },
  { path: 'cnh', component: CnhComponent },
  { path: 'identidade', component: IdentidadeComponent },
  { path: 'saude', component: SaudeComponent }
];
