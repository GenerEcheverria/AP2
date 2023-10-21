import { Component, Input } from '@angular/core';
import { DiarioEmbarazada } from 'src/app/interfaces/diario-embarazada';

@Component({
  selector: 'app-page-list-item',
  templateUrl: './page-list-item.component.html',
  styleUrls: ['./page-list-item.component.css']
})
export class PageListItemComponent {
  @Input() page!: DiarioEmbarazada;
  @Input() showDetails: any;
  @Input() deletePage: any;

  constructor(){
    this.deletePage = () => {}
  }

  showPageDetails(idPage: number) {
    this.showDetails(idPage);
  }

  deletePageCallback(idPage: number) {
    this.deletePage(idPage);
  }
}
