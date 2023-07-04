import { Injectable } from '@angular/core';

export interface Joueur {
  prenom: string;
  nom: string;
  partiesGagnees?: number;
}

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  private currentJoueur!: Joueur;
  private joueurs: Joueur[];

  constructor() {
    this.joueurs = [
      { prenom: 'Hercules', nom: 'Buto', partiesGagnees: 4 },
      { prenom: 'Sybille', nom: 'Boquet' },
      { prenom: 'Albert', nom: 'Zercker' },
      { prenom: 'Flora', nom: 'Daigoux' },
      { prenom: 'Alphonse', nom: 'Danlta' }
    ]
  }

  //Méthode pour créer un joueur
  //Paramétres : joueurNom, joueurPrenom
  createJoueur(joueurNom: string, joueurPrenom: string): void {
    const joueur: Joueur = {
      prenom: joueurPrenom,
      nom: joueurNom,
    };
    this.joueurs.push(joueur);
  }

  //Méthode pour supprimer un joueur
  deleteJoueur(index: number): void {
    if (index >= 0 && index < this.joueurs.length) {
      this.joueurs.splice(index, 1);
    }
  }

  //Méthode pour récupérer l'ensemble des joueurs
  getAll() {
    return this.joueurs;
  }

  //Méthode pour modifier le joueur actuel
  setCurrentJoueur(joueur: Joueur) {
    this.currentJoueur = joueur;
  }
  //Méthode pour récupérer le joueur actuel
  getCurrentJoueur(): Joueur {
    return this.currentJoueur;
  }

}