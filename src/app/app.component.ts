import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { Router, RouterLink, RouterLinkActive } from '@angular/router';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
  standalone: true,
  imports: [IonicModule, RouterLink, RouterLinkActive, CommonModule],
})
export class AppComponent {
  private router: Router = inject(Router);

  public appPages = [
    { title: 'Accueil', url: 'home', icon: 'home' },
    { title: 'Joueurs', url: 'joueurs', icon: 'accessibility' },
    { title: 'Jeux', url: 'jeux', icon: 'game-controller' },
    { title: 'Parties', url: 'parties', icon: 'beer' },
    { title: 'Tournois', url: 'tournois', icon: 'ribbon' },
  ];
  constructor() {}

  navigateTo(url: string) {
    this.router.navigateByUrl(url);
  }

}
