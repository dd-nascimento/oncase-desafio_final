import { Component, OnInit } from '@angular/core';

export interface Postagens {
      titulo: string;
      datapostagem: string;
      nComentarios: string;
      nVisualizacoes: string;
}

const ELEMENT_DATA: Postagens [] = [
  { titulo: 'Super Lua de Fevereiro', datapostagem: '10/02/2020', nComentarios: '10', nVisualizacoes: '20'},
  { titulo: 'Vivendo da Lua', datapostagem: '10/01/2020', nComentarios: '223', nVisualizacoes: '300'}
];

@Component({
  selector: 'app-postagens',
  templateUrl: './postagens.component.html',
  styleUrls: ['./postagens.component.css']
})

export class PostagensComponent {
  displayedColumns: string [] = ['titulo', 'datapostagem', 'nComentarios', 'nVisualizacoes'];
  dataSource = ELEMENT_DATA;
}
