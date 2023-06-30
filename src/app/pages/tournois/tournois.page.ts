import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-tournois',
  templateUrl: './tournois.page.html',
  styleUrls: ['./tournois.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class TournoisPage implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
