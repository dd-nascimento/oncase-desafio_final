import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscreverComponent } from './escrever/escrever.component';
import { PostagensComponent } from './postagens/postagens.component';
import { AlbunsComponent } from './albuns/albuns.component';

import {MatCardModule} from '@angular/material/card';



@NgModule({
  declarations: [
    EscreverComponent,
    PostagensComponent,
    AlbunsComponent],
  imports: [
    CommonModule,
    MatCardModule
  ],
  exports: [
    EscreverComponent,
    PostagensComponent
  ]
})
export class FuncionalidadesModule { }
