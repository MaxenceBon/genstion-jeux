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


  createPartie(name: string, selectedJoueursNames: string[], selectedJeuxTitle: string[]): void {
    const allJoueurs = this.joueurService.getAll();
    const allJeux = this.jeuService.getAll();
    const selectedJoueurs: Joueur[] = [];
    const selectedJeux: Jeu[] = [];

    selectedJoueursNames.forEach(JoueursName => {
      const Joueurs = allJoueurs.find(joueur => this.getFullName(joueur) === JoueursName);
      if (Joueurs) {
        selectedJoueurs.push(Joueurs);
      }
    });

    selectedJeuxTitle.forEach(jeuTitle => {
      const jeu = allJeux.find(jeu => this.getTitre(jeu) === jeuTitle);
      if (jeu) {
        selectedJeux.push(jeu);
      }
    });

    const partie: Partie = {
      libelle: name,
      joueurs: selectedJoueurs,
      jeux: selectedJeux,
      gagnant: undefined
    };
    this.parties.push(partie);
  }

  private getFullName(joueur: Joueur): string {
    return `${joueur.prenom} ${joueur.nom}`;
  }

  private getTitre(jeu: Jeu): string {
    return jeu.titre;
  }

  getAll() {
    return this.parties;
  }

  deletePartie(index: number): void {
    if (index >= 0 && index < this.parties.length) {
      this.parties.splice(index, 1);
    }
  }

}