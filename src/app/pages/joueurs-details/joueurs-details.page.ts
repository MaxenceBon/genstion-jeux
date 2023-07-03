import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Joueur, JoueurService } from 'src/app/service/joueur.service';

@Component({
  selector: 'app-joueurs-details',
  templateUrl: './joueurs-details.page.html',
  styleUrls: ['./joueurs-details.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JoueursDetailsPage implements OnInit {
  joueur!: Joueur;
  editedJoueur!: Joueur;
  private joueurService: JoueurService = inject(JoueurService);
  
  constructor() { }

  ngOnInit() {
    this.joueur = this.joueurService.getCurrentJoueur();
    this.editedJoueur = Object.assign({}, this.joueur); 
  }
  save() {
    Object.assign(this.joueur, this.editedJoueur);
  }
  cancel() {
    Object.assign(this.editedJoueur, this.joueur);
  }


}
