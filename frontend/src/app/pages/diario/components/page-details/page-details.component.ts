import { Component, Input } from '@angular/core';
import { DiarioEmbarazada } from 'src/app/interfaces/diario-embarazada';

@Component({
  selector: 'app-page-details',
  templateUrl: './page-details.component.html',
  styleUrls: ['./page-details.component.css']
})
export class PageDetailsComponent {
  @Input() page!: DiarioEmbarazada | undefined;

  
}
