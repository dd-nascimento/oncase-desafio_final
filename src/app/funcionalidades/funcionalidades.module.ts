import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EscreverComponent } from './escrever/escrever.component';
import { PostagensComponent } from './postagens/postagens.component';



@NgModule({
  declarations: [EscreverComponent, PostagensComponent],
  imports: [
    CommonModule
  ],
  exports: [
    EscreverComponent,
    PostagensComponent
  ]
})
export class FuncionalidadesModule { }
