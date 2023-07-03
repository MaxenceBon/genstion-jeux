import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
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
private joueurService: JoueurService = inject(JoueurService);
  constructor(private router: Router) { }

  joueurDetails(joueur: Joueur) {
    this.joueurService.setCurrentJoueur(joueur);
    this.router.navigateByUrl('joueurs-details');
  }

  ngOnInit() {
    this.joueurs = this.joueurService.getAll()
  }

}
