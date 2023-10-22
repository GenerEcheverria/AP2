import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CitaService } from '../../services/cita.service';
import { UpcomingDate } from '../../interfaces/upcoming-date';
import { DatepickerOptions } from 'ng2-datepicker';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent {
  protected name!: string;
  protected date!: string;
  protected idUser!: string | null;
  protected userRole!: string | null;
  //Patient
  protected upcomingDate!: UpcomingDate;

  constructor(private authService: AuthService, private citaService: CitaService){}

  ngOnInit(): void {
    this.idUser = localStorage.getItem('idUser')
    this.getUserInfo()
    this.userRole = localStorage.getItem('role');
    if (this.userRole == "Doctor") {
    } else {
      this.upcomingAppointment();
    }
  }

  private getUserInfo() {
    this.authService.me().subscribe(data => {
      this.name = data.name;
    })
  }

  private upcomingAppointment() {
    if (this.idUser != null) {
      this.citaService.getUpcomingAppointment(this.idUser).subscribe(data => {

        this.upcomingDate = data as UpcomingDate;
        this.upcomingDate.time = this.upcomingDate.time.split(':').slice(0, 2).join(':');

      });
    }

  }
}
