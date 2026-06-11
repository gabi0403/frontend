import { Routes } from '@angular/router';
import { Vagas } from './view/vagas/vagas';
import { Inicio } from './view/inicio/inicio';
import { PainelVagas } from './view/painel-vagas/painel-vagas';
import { CurriculoForm } from './view/curriculo-form/curriculo-form';
import { PainelCurriculo } from './view/painel-curriculo/painel-curriculo';

export const routes: Routes = [
  { path: '', component: Inicio },
  { path: 'vagas', component: Vagas },
  { path: 'painel-vagas', component: PainelVagas },
  { path: 'curriculo-form', component: CurriculoForm }, // Tela de cadastro
  { path: 'painel-curriculo', component: PainelCurriculo }, // Tela oculta de listagem geral
];
