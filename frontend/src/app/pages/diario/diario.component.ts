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
  protected pages: DiarioEmbarazada[] = []; // Variable para almacenar los pages

  constructor(private diarioEmbarazadaService: DiarioEmbarazadaService) {
    this.verForm = false;
    this.listPages()
  }
  
  public listPages() {
    this.diarioEmbarazadaService.getHojasDiarioById(localStorage.getItem('idPatient')||"").subscribe(
      pages => {
        this.pages = pages as DiarioEmbarazada[] 
      }
    )
  }

  protected visualizarForm() {
    this.verForm = true;
  }

   deletePage(idPage: number) {
    this.diarioEmbarazadaService.deletePage(idPage).subscribe(() => {
      this.listPages(); 
    });
  }

}