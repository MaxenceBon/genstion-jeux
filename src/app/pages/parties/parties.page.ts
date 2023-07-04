import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, AlertController, IonicModule } from '@ionic/angular';
import { Partie, PartieService } from 'src/app/service/partie.service';
import { Joueur, JoueurService } from 'src/app/service/joueur.service';
import { Jeu, JeuService } from 'src/app/service/jeu.service';

@Component({
  selector: 'app-parties',
  templateUrl: './parties.page.html',
  styleUrls: ['./parties.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class PartiesPage implements OnInit {
  parties!: Partie[];
  joueurs!: Joueur[];
  jeux!: Jeu[];
  partieName!: string;
  selectedJoueurs!: string[];
  selectedJeux!: string[];
  private partieService: PartieService = inject(PartieService);
  private joueurService: JoueurService = inject(JoueurService);
  private jeuService: JeuService = inject(JeuService);

  constructor() { }

  ngOnInit() {
    this.parties = this.partieService.getAll();
    this.joueurs = this.joueurService.getAll();
    this.jeux = this.jeuService.getAll();
  }

  createPartie(): void {
    if (this.partieName && this.selectedJoueurs && this.selectedJeux) {
      this.partieService.createPartie(this.partieName, this.selectedJoueurs, this.selectedJeux);
      this.partieName = '';
      this.selectedJeux = [];
      this.selectedJoueurs = [];
    }
  }

  getTitre(jeu: Jeu): string {
    return jeu.titre;
  }

  getFullName(joueur: Joueur): string {
    return `${joueur.prenom} ${joueur.nom}`;
  }

  deletePartie(index: number): void {
    this.partieService.deletePartie(index);
  }

}
