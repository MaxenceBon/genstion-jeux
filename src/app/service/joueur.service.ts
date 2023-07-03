import { Injectable } from '@angular/core';

export interface Joueur {
  id: number;
  firstName: string;
  lastName: string;
  gamesWon?: number;
}

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private currentJoueurs!: Joueur;
  private joueurs: Joueur[];
  
  constructor() {
    this.joueurs = [
      {id:1 , firstName: 'Hercules', lastName: 'Buto', gamesWon:4},
      {id:2 , firstName: 'Sybille', lastName: 'Boquet'},
      {id:3 , firstName: 'Albert', lastName: 'Zercker'},
      {id:4 , firstName: 'Flora', lastName: 'Daigoux'},
      {id:5 , firstName: 'Alphonse', lastName: 'Danlta'}
    ]
  }

  getAll(){
    return this.joueurs;
  }

  setCurrentJoueur(joueur: Joueur) {
    this.currentJoueurs = joueur;
  }
  getCurrentJoueur(): Joueur {
    return this.currentJoueurs;
  }

  getJoueurById(id: number){
    return this.joueurs.find(joueur => joueur.id === id);
  }

}