import { Injectable, inject } from '@angular/core';
import { Joueur, JoueurService } from './joueur.service';
import { Jeu, JeuService } from './jeu.service';

export interface Partie {
  libelle: string;
  joueurs: Joueur[];
  jeux: Jeu[];
  gagnant?: Joueur;
}

@Injectable({
  providedIn: 'root'
})
export class PartieService {
  public parties: Partie[] = [];
  public joueurs!: Joueur[];
  private joueurService: JoueurService = inject(JoueurService);
  private jeuService: JeuService = inject(JeuService);

  constructor() {
  }

  //Méthode pour créer une partie
  //Paramétres : libelle, selectedJoueursNoms, selectedJeuxTitre
  createPartie(libelle: string, selectedJoueursNoms: string[], selectedJeuxTitre: string[]): void {
    
    //on récupére l'ensemble des joueurs et des jeux
    const allJoueurs = this.joueurService.getAll();
    const allJeux = this.jeuService.getAll();
    const selectedJoueurs: Joueur[] = [];
    const selectedJeux: Jeu[] = [];

    //on selectionne les joueurs à partir de leur prenom et nom
    selectedJoueursNoms.forEach(JoueursNom => {
      const Joueurs = allJoueurs.find(joueur => this.getFullName(joueur) === JoueursNom);
      if (Joueurs) {
        selectedJoueurs.push(Joueurs);
      }
    });

    //on selectionne le jeu à partir de son titre
    selectedJeuxTitre.forEach(jeuTitre => {
      const jeu = allJeux.find(jeu => this.getTitre(jeu) === jeuTitre);
      if (jeu) {
        selectedJeux.push(jeu);
      }
    });

    //on crée la partie
    const partie: Partie = {
      libelle: libelle,
      joueurs: selectedJoueurs,
      jeux: selectedJeux,
      gagnant: undefined
    };
    this.parties.push(partie);
  }


  //Méthode pour récupérer le nom complet d'un joueur
  private getFullName(joueur: Joueur): string {
    return `${joueur.prenom} ${joueur.nom}`;
  }


  //Méthode pour récuperer le titre d'un jeu
  private getTitre(jeu: Jeu): string {
    return jeu.titre;
  }

  //Méthode pour récupérer l'ensemble des parties
  getAll() {
    return this.parties;
  }

  //Méthode pour supprimer une partie
  deletePartie(index: number): void {
    if (index >= 0 && index < this.parties.length) {
      this.parties.splice(index, 1);
    }
  }

}