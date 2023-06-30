import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
public jeux: Jeu[] = 
[
  {name: 'Risk', type: 'jeu de stratégie', numberOfPlayers:6, lenght:12},
  {name: 'Mysterium', type: 'jeu d\'ambiance', numberOfPlayers:5, lenght:20},
  {name: 'Pandemic', type: 'jeu de réflexion', numberOfPlayers:7, lenght:30},
]

getAll(){
  return this.jeux;
}
  constructor() { }
}

export interface Jeu {
  name: string;
  type: string;
  numberOfPlayers: number;
  lenght: number;
}
