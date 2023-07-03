import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JeuService {
public jeux: Jeu[] = 
[
  {name: 'Risk', type: 'Jeu de stratégie', numberOfPlayers:6, lenght:12, description: 'Les joueurs capturent des territoires'},
  {name: 'Mysterium', type: 'Jeu d\'ambiance', numberOfPlayers:5, lenght:20},
  {name: 'Pandemic', type: 'Jeu de réflexion', numberOfPlayers:7, lenght:30},
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
  description?: string;
}
