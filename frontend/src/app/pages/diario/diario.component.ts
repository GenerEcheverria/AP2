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
    if (this.currentDate) {
      const currentDate = new Date(this.currentDate);
      if (currentDate.getMonth() === 12) {
        currentDate.setFullYear(currentDate.getFullYear() + 1);
        currentDate.setMonth(0);
      } else {
        currentDate.setMonth(currentDate.getMonth() + 1);
      }
      this.currentDate = this.formatDate(currentDate);
    }
  }

  protected anteriorMes() {
    if (this.currentDate) {
      const currentDate = new Date(this.currentDate);
      if (currentDate.getMonth() === 0) {
        currentDate.setFullYear(currentDate.getFullYear() - 1);
        currentDate.setMonth(11);
      } else {
        currentDate.setMonth(currentDate.getMonth() - 1);
      }
      this.currentDate = this.formatDate(currentDate);
    }
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

  private formatDate(date: Date): string {
    return this.datePipe.transform(date, 'MMMM y') || "";
  }

}
