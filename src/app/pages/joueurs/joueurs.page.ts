import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Joueur, JoueurService } from 'src/app/service/joueur.service';

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
  constructor() { }

  ngOnInit() {
    this.joueurs = this.joueurService.getAll()
  }

}
