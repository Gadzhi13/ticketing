import { Component } from '@angular/core';

@Component({
  selector: 'tsys-dashboard',
  templateUrl: './tsys-dashboard.component.html',
  styleUrls: ['./tsys-dashboard.component.css']
})
export class TsysDashboardComponent {
  cards = [
    { title: 'Card 1', cols: 2, rows: 1 },
    { title: 'Card 2', cols: 1, rows: 1 },
    { title: 'Card 3', cols: 1, rows: 2 },
    { title: 'Card 4', cols: 1, rows: 1 }
  ];

  delItem(el) {
    let index: number = this.cards.indexOf(el, 0);
    if (index > -1) {
      this.cards.splice(index, 1);
    }
  }
}
