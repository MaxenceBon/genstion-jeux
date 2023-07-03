import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'home',
    loadComponent: () => import('./home/home.page').then((m) => m.HomePage),
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'parties',
    loadComponent: () => import('./pages/parties/parties.page').then( m => m.PartiesPage)
  },
  {
    path: 'tournois',
    loadComponent: () => import('./pages/tournois/tournois.page').then( m => m.TournoisPage)
  },
  {
    path: 'joueurs',
    loadComponent: () => import('./pages/joueurs/joueurs.page').then( m => m.JoueursPage)
  },
  {
    path: 'jeux',
    loadComponent: () => import('./pages/jeux/jeux.page').then( m => m.JeuxPage)
  },
  {
    path: 'joueurs-details/:id',
    loadComponent: () => import('./pages/joueurs-details/joueurs-details.page').then( m => m.JoueursDetailsPage)
  },
];
