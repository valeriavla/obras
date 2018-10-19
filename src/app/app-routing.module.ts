import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';
import { Inicio } from './inicio/inicio.component';
import { Mapa } from './mapa/mapa.component';

const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'mapa', component: Mapa }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}