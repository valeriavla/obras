import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Header } from './header/header.component';
import { Inicio } from './inicio/inicio.component';
import { Mapa } from './mapa/mapa.component';
import { Opinion } from './opinion/opinion.component';
import { Comentarios } from './comentarios/comentarios.component';
import { CategoriasComponent } from './categorias/categorias.component';
import { AniosCienciaComponent } from './anios-ciencia/anios-ciencia.component';
import { AniosComunicacionComponent } from './anios-comunicacion/anios-comunicacion.component';
import { AniosEducacionComponent } from './anios-educacion/anios-educacion.component';
import { AniosHaciendaComponent } from './anios-hacienda/anios-hacienda.component';
import { AniosInstitucionesComponent } from './anios-instituciones/anios-instituciones.component';
import { AniosSaludComponent } from './anios-salud/anios-salud.component';
import { AniosSeguridadComponent } from './anios-seguridad/anios-seguridad.component';

const routes: Routes = [
    { path: '', component: Inicio },
    { path: 'mapa', component: Mapa },
    { path: 'opinion', component: Opinion },
    { path: 'comentarios', component: Comentarios },
    { path: 'categorias', component: CategoriasComponent },
    {path: 'ciencia', component: AniosCienciaComponent},
    {path: 'comunicacion', component: AniosComunicacionComponent},
    {path: 'educacion', component: AniosEducacionComponent},
    {path: 'hacienda', component: AniosHaciendaComponent},
    {path: 'instituciones', component: AniosInstitucionesComponent},
    {path: 'salud', component: AniosSaludComponent},
    {path: 'seguridad', component: AniosSeguridadComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
  })
  export class AppRoutingModule {}