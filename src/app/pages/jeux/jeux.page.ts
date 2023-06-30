import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Jeu, JeuService } from 'src/app/service/jeu.service';

@Component({
  selector: 'app-jeux',
  templateUrl: './jeux.page.html',
  styleUrls: ['./jeux.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class JeuxPage implements OnInit {
jeux!: Jeu[];
private jeuService: JeuService = inject(JeuService);
  constructor() { }

  ngOnInit() {
    this.jeux = this.jeuService.getAll();
  }

}
