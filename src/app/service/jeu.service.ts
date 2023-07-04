import { Injectable } from '@angular/core';

export interface Jeu {
  titre: string;
  type: string;
  nombreDeJoueurs: number;
  duree: number;
  description?: string;
}

@Injectable({
  providedIn: 'root'
})
export class JeuService {

  constructor() { }

  //Méthode pour récupérer l'ensemble des jeux
  getAll() {
    return this.jeux;
  }

  //On crée une liste de jeux
  jeux: Jeu[] =
    [
      { titre: 'Risk', type: 'Jeu de stratégie', nombreDeJoueurs: 6, duree: 12, description: 'Les joueurs capturent des territoires' },
      { titre: 'Mysterium', type: 'Jeu d\'ambiance', nombreDeJoueurs: 5, duree: 20 },
      { titre: 'Pandemic', type: 'Jeu de réflexion', nombreDeJoueurs: 7, duree: 30 },
    ]

}



