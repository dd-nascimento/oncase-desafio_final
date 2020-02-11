import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscreverComponent } from './escrever/escrever.component';
import { PostagensComponent } from './postagens/postagens.component';
import { AlbunsComponent } from './albuns/albuns.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';




@NgModule({
  declarations: [
    EscreverComponent,
    PostagensComponent,
    AlbunsComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    EscreverComponent,
    PostagensComponent
  ]
})
export class FuncionalidadesModule { }
