import { Component, OnInit } from '@angular/core';

export interface Postagens {
      Titulo: string;
      Datapostagem: string;
      NComentarios: string;
      NVisualizacoes: string;
}

const ELEMENT_DATA: Postagens [] = [
  { Titulo: 'Super Lua de Fevereiro', Datapostagem: '10/02/2020', NComentarios: '10', NVisualizacoes: '20'},
  { Titulo: 'Vivendo da Lua', Datapostagem: '10/01/2020', NComentarios: '223', NVisualizacoes: '300'}
];

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})

export class PostagensComponent {
  displayedColumns: string [] = ['Titulo', 'Datapostagem', 'NComentarios', 'NVisualizacoes'];
  dataSource = ELEMENT_DATA;
}
