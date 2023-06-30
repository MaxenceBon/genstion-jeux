import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class JoueurService {
  public joueurs: Joueur[] =
  [
    {firstName: 'Jean', lastName: 'Bon'},
    {firstName: 'Pierre', lastName: 'Afeu'},
    {firstName: 'Harry', lastName: 'Covert'},
    {firstName: 'Corinne', lastName: 'Titgoutte'},
    {firstName: 'Mélusine', lastName: 'Enfaillite'}
  ]
  
  getAll(){
    return this.joueurs;
  }
  constructor() { }

}
export interface Joueur {
  firstName: string;
  lastName: string;
  gamesWon?: number;
}
