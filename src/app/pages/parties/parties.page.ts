import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';
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
  private actionSheetController: ActionSheetController = inject(ActionSheetController);

  constructor() { }

  ngOnInit() {
    this.parties = this.partieService.getAll();
    this.joueurs = this.joueurService.getAll();
    this.jeux = this.jeuService.getAll();
  }

  //Méthode pour créer une partie
  createPartie(): void {
    if (this.partieName && this.selectedJoueurs && this.selectedJeux) {
      this.partieService.createPartie(this.partieName, this.selectedJoueurs, this.selectedJeux);
      
      //On reinitialise les champs
      this.partieName = '';
      this.selectedJeux = [];
      this.selectedJoueurs = [];
    }
  }

  //Méthode pour récupérer le titre d'un jeu
  getTitre(jeu: Jeu): string {
    return jeu.titre;
  }

  //Méthode pour récupérer le prenom et le nom d'un joueur
  getFullName(joueur: Joueur): string {
    return `${joueur.prenom} ${joueur.nom}`;
  }

  //Méthode pour supprimer une partie
  deletePartie(index: number): void {
    this.partieService.deletePartie(index);
  }

  //Méthode pour afficher une alerte lors de la suppression d'une partie
  async deletePartieAlert(index: number) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Supprimer',
          handler: () => this.deletePartie(index)
        },
        {
          text: 'Annuler',
          role: 'cancel',
          icon: 'close',
          handler: () => {},
        },
      ],
    });
    actionSheet.present();
  }

}
