import { Component } from '@angular/core';
import { DiarioEmbarazada } from 'src/app/interfaces/diario-embarazada';
import { DiarioEmbarazadaService } from 'src/app/services/diario-embarazada.service';

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {
  protected verForm: boolean;
  protected pages: DiarioEmbarazada[] = [];
  protected currentPage:  DiarioEmbarazada | undefined;

  constructor(private diarioEmbarazadaService: DiarioEmbarazadaService) {
    this.verForm = false;
    this.listPages()
  }

  protected listPages() {
    this.diarioEmbarazadaService.getHojasDiarioById(localStorage.getItem('idPatient') || "").subscribe(
      pages => {
        this.pages = pages as DiarioEmbarazada[]
      }
    )
  }

  protected showDetails(idPage:number){
    this.currentPage = this.pages.find(page => page.idPage === idPage);
    this.verForm = false;
  }
  
  protected deletePage(idPage: number) {
    this.diarioEmbarazadaService.deletePage(idPage).subscribe(() => {
      this.listPages();
    });
  }
  
  protected visualizarForm() {
    this.verForm = true;
  }
}