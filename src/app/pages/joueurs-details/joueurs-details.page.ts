import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { Camera, CameraResultType, CameraSource } from '@capacitor/camera';
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
  avatarImage!: string;
  
  constructor() { }

  async uploadPhoto() {
    const image = await Camera.getPhoto({
      quality: 90,
      allowEditing: false,
      resultType: CameraResultType.Base64,
      source: CameraSource.Prompt,
    });
  
    this.avatarImage = `data:image/jpeg;base64,${image.base64String}`;
  }

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
