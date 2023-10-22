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
  //Doctor
  protected calendarDate!: string;
  private idDoctor!: string;

  constructor(private authService: AuthService, private citaService: CitaService) { }

  ngOnInit(): void {
    this.idUser = localStorage.getItem('idUser')
    this.getUserInfo()
    this.userRole = localStorage.getItem('role');
    if (this.userRole == "Doctor") {
      this.idDoctor = localStorage.getItem('idDoctor') || "";
      this.initCalendarDate()
      this.listAppointments()
    } else {
      this.upcomingAppointment();
    }
  }

  private getUserInfo() {
    this.authService.me().subscribe(data => {
      this.name = data.name;
    })
  }

  //Patient
  private upcomingAppointment() {
    if (this.idUser != null) {
      this.citaService.getUpcomingAppointment(this.idUser).subscribe(data => {

        this.upcomingDate = data as UpcomingDate;
        this.upcomingDate.time = this.upcomingDate.time.split(':').slice(0, 2).join(':');

      });
    }
  }

  //Doctor
  private initCalendarDate() {
    const currentDate = new Date();
    this.calendarDate=this.formatDate(currentDate);
  }

  protected setCalendarDate(event:any) {
    this.calendarDate = this.formatDate(new Date(event.target.value));
    this.listAppointments();
  }

  protected listAppointments() {
    this.citaService.getAppointmentForDoctor(this.idDoctor, this.calendarDate).subscribe(data => {
      console.log(data); 
    })
  }

  private formatDate(date: Date){
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
  }

}
