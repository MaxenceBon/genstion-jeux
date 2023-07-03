import { Component, OnInit } from '@angular/core';
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
  
  constructor(
    private joueurService: JoueurService
    ) { }

  ngOnInit() {
    
  }

}
