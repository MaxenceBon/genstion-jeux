import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActionSheetController, IonicModule } from '@ionic/angular';
import { Joueur, JoueurService } from 'src/app/service/joueur.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-joueurs',
  templateUrl: './joueurs.page.html',
  styleUrls: ['./joueurs.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})

export class JoueursPage implements OnInit {
  joueurs!: Joueur[];
  joueurNom!: string;
  joueurPrenom!: string;
  private joueurService: JoueurService = inject(JoueurService);
  private router: Router = inject(Router);
  private actionSheetController: ActionSheetController = inject(ActionSheetController);

  constructor() { }

  ngOnInit() {
    this.joueurs = this.joueurService.getAll()
  }

  //Méthode pour créer un joueur
  createJoueur(): void {
    if (this.joueurNom && this.joueurPrenom) {
      this.joueurService.createJoueur(this.joueurNom, this.joueurPrenom);

      //On reinitialise les champs
      this.joueurNom = '';
      this.joueurPrenom = '';
    }
  }

  //Méthode pour récupérer le joueur actuel et afficher ses details
  joueurDetails(joueur: Joueur) {
    this.joueurService.setCurrentJoueur(joueur);
    this.router.navigateByUrl('joueurs-details');
  }

  //Méthode pour supprimer un joueur
  deleteJoueur(index: number): void {
    this.joueurService.deleteJoueur(index);
  }

  //Méthode pour afficher une alerte lors de la suppression d'un joueur
  async deleteJoueurAlert(index: number) {
    const actionSheet = await this.actionSheetController.create({
      buttons: [
        {
          text: 'Supprimer',
          handler: () => this.deleteJoueur(index)
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
