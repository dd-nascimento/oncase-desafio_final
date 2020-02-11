import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscreverComponent } from './funcionalidades/escrever/escrever.component';
import { AlbunsComponent } from './funcionalidades/albuns/albuns.component';
import { PostagensComponent } from './funcionalidades/postagens/postagens.component';
import { TarefasComponent } from './funcionalidades/tarefas/tarefas.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EscreverComponent},
  { path: 'albuns', component: AlbunsComponent},
  { path: 'postagens', component: PostagensComponent},
  { path: 'albuns', component: AlbunsComponent},
  { path: 'to-dos', component: TarefasComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
