import { Component } from '@angular/core';
import { DiarioEmbarazada } from 'src/app/interfaces/diario-embarazada';
import { DiarioEmbarazadaService } from 'src/app/services/diario-embarazada.service';
import { DatePipe } from '@angular/common'; // Importa DatePipe

@Component({
  selector: 'app-diario',
  templateUrl: './diario.component.html',
  styleUrls: ['./diario.component.css']
})
export class DiarioComponent {
  protected verForm: boolean;
  protected pages: DiarioEmbarazada[] = [];
  protected currentPage: DiarioEmbarazada | undefined;
  protected currentDate: string;

  constructor(
    private diarioEmbarazadaService: DiarioEmbarazadaService,
    private datePipe: DatePipe
  ) {
    this.verForm = false;
    this.currentDate = this.formatDate(new Date());
    this.listPages();
  }

  protected listPages() {
    this.diarioEmbarazadaService
      .getHojasDiarioById(localStorage.getItem('idPatient') || '')
      .subscribe((pages) => {
        this.pages = pages as DiarioEmbarazada[];
      });
  }

  protected siguienteMes() {
    console.log(1);
  }

  protected showDetails(idPage: number) {
    this.currentPage = this.pages.find((page) => page.idPage === idPage);
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

  //No es la mejor forma pero no hay tiempo
  private formatDate(date: Date): string {
    const monthNames: { [key: string]: string } = {
      January: 'Enero',
      February: 'Febrero',
      March: 'Marzo',
      April: 'Abril',
      May: 'Mayo',
      June: 'Junio',
      July: 'Julio',
      August: 'Agosto',
      September: 'Septiembre',
      October: 'Octubre',
      November: 'Noviembre',
      December: 'Diciembre',
    };
    const monthName = monthNames[this.datePipe.transform(date, 'MMMM') as string];
    return `${monthName} ${this.datePipe.transform(date, 'y')}`;
  }
  
}
