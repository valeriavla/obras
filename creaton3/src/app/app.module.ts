import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import { Header } from './header/header.component';
import { Inicio } from './inicio/inicio.component';
import {MatCardModule} from '@angular/material/card';
import { Menu } from './menu/menu.component';
import { AppRoutingModule } from './app-routing.module';
import { Mapa } from './mapa/mapa.component';
import {MatButtonModule} from '@angular/material/button';
import { CategoriasComponent } from './categorias/categorias.component';
import {MatGridListModule} from '@angular/material/grid-list';
import { AniosSaludComponent } from './anios-salud/anios-salud.component';
import { AniosCienciaComponent } from './anios-ciencia/anios-ciencia.component';
import { AniosSeguridadComponent } from './anios-seguridad/anios-seguridad.component';
import { AniosEducacionComponent } from './anios-educacion/anios-educacion.component';
import { AniosComunicacionComponent } from './anios-comunicacion/anios-comunicacion.component';
import { AniosHaciendaComponent } from './anios-hacienda/anios-hacienda.component';
import { AniosInstitucionesComponent } from './anios-instituciones/anios-instituciones.component';
import {MatTabsModule} from '@angular/material/tabs';
import {MatTableModule} from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    Header,
    Inicio,
    Menu,
    Mapa,
    CategoriasComponent,
    AniosSaludComponent,
    AniosCienciaComponent,
    AniosSeguridadComponent,
    AniosEducacionComponent,
    AniosComunicacionComponent,
    AniosHaciendaComponent,
    AniosInstitucionesComponent,

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MatDatepickerModule,
    MatIconModule,
    MatToolbarModule,
    MatCardModule,
    MatButtonToggleModule,
    AppRoutingModule,
    MatButtonModule,
    MatGridListModule,
    MatTabsModule,
    MatTableModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
