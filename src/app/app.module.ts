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
import { Opinion } from './opinion/opinion.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatListModule} from '@angular/material/list';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { Comentarios } from './comentarios/comentarios.component';
import {MatDividerModule} from '@angular/material/divider';
import { CategoriasComponent } from './categorias/categorias.component';
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
    Opinion,
    Comentarios,
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
    MatChipsModule,
    MatListModule,
    MatGridListModule,
    MatExpansionModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    MatTabsModule,
    MatTableModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  
}
