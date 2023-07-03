import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {

  joueurs: Joueur[] =
  [
    {id:1 , firstName: 'Hercules', lastName: 'Buto'},
    {id:2 , firstName: 'Sybille', lastName: 'Boquet'},
    {id:3 , firstName: 'Albert', lastName: 'Zercker'},
    {id:4 , firstName: 'Flora', lastName: 'Daigoux'},
    {id:5 , firstName: 'Alphonse', lastName: 'Danlta'}
  ]
  
  getAll(){
    return this.joueurs;
  }
  constructor() { }

  getJoueurById(id: number){
    return this.joueurs.find(joueur => joueur.id === id);
  }

}

export interface Joueur {
  id: number;
  firstName: string;
  lastName: string;
  gamesWon?: number;
}
