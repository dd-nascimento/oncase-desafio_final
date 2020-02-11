import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscreverComponent } from './funcionalidades/escrever/escrever.component';
import { PostagensComponent } from './funcionalidades/postagens/postagens.component';
import { AlbunsComponent } from './funcionalidades/albuns/albuns.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EscreverComponent},
  { path: 'postagens', component: PostagensComponent},
  { path: 'albuns', component: AlbunsComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
