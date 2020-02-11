import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscreverComponent } from './escrever/escrever.component';
import { AlbunsComponent } from './albuns/albuns.component';

import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';
import { PostagensComponent } from './postagens/postagens.component';
import { TarefasComponent } from './tarefas/tarefas.component';




@NgModule({
  declarations: [
    EscreverComponent,
    AlbunsComponent,
    PostagensComponent,
    TarefasComponent],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule
  ],
  exports: [
    EscreverComponent,
    PostagensComponent,
    AlbunsComponent,
    TarefasComponent
  ]
})
export class FuncionalidadesModule { }
