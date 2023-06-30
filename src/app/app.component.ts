import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  public appPages = [
    { title: 'Accueil', url: '/home', icon: 'home' },
    { title: 'Joueurs', url: '/joueurs', icon: 'accessibility' },
    { title: 'Jeux', url: '/jeux', icon: 'game-controller' },
    { title: 'Parties', url: '/parties', icon: 'beer' },
    { title: 'Tournois', url: '/tournois', icon: 'ribbon' },
  ];
  constructor() {}
}
