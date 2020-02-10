import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { EscreverComponent } from './funcionalidades/escrever/escrever.component';


const routes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'editor', component: EscreverComponent}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
