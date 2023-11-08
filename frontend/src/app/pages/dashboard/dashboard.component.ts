import { Component, AfterViewInit, EventEmitter } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { CitaService } from '../../services/cita.service';
import { UpcomingDate } from '../../interfaces/upcoming-date';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements AfterViewInit {
  protected name!: string;
  protected date!: string;
  protected idUser!: string | null;
  protected userRole!: string | null;
  //Patient
  protected upcomingDate!: UpcomingDate;
  //Doctor
  protected calendarDate!: string;
  private idDoctor!: string;
  protected appointmentSelected: any = {};
  protected appointments: any = [];
  protected appointmentsList: any = [];

  constructor(private authService: AuthService, private citaService: CitaService) { }

  ngAfterViewInit() {
    //this.terminarCitaActual();
  }

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
  public miFuncion(eventData: any) {
    this.appointmentSelected = eventData
    // Aquí puedes poner el código que quieres que se ejecute cuando se activa la función desde el componente hijo
    // console.log('Función activada desde el componente hijo');
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
    this.calendarDate = this.formatDate(currentDate);
  }

  protected setCalendarDate(event: any) {
    this.calendarDate = this.formatDate(new Date(event.target.value));
    this.listAppointments();
  }

  protected listAppointments() {
    this.citaService.getAppointmentForDoctor(this.idDoctor, this.calendarDate).subscribe(data => {
      if (data && typeof data === 'object') {
        const appointmentsArray = Object.values(data);
        appointmentsArray.forEach((appointment: any) => {
          appointment.isCurrent = this.isAppointmentCurrent(appointment.time);
          if (appointment.summary == "" && appointment.prescription == "") {
            appointment.isDone = false;
          } else {
            appointment.isDone = true;
          }
        });
        this.appointments = appointmentsArray.reverse();
        this.removePrevAppointments()
        console.log(this.appointments)
      }
    });
  }
  protected getInfo(appointmentData: any){
    this.appointmentSelected = appointmentData
  }
  private removePrevAppointments() {
    const currentAppointments = [];
    const currentAppointmentsList = [];
    for (let i = this.appointments.length - 1; i >= 0; i--) {
      const appointment = this.appointments[i];
      console.log(appointment.isCurrent, appointment.isDone)
      if (!appointment.isCurrent) currentAppointments.push(appointment)
      if (appointment.isCurrent && !appointment.isDone) {
        if(currentAppointments.length<1){
          currentAppointments.push(appointment)
          this.appointmentSelected = appointment
        }else{
          appointment.isCurrent = false;
        currentAppointmentsList.push(appointment)
        }
      }
    }
    console.log(currentAppointments)
    this.appointments = currentAppointments
    this.appointmentsList = currentAppointmentsList
  }

  private formatDate(date: Date) {
    const year = date.getFullYear();
    const month = ('0' + (date.getMonth() + 1)).slice(-2);
    const day = ('0' + date.getDate()).slice(-2);
    return `${year}-${month}-${day}`
  }

  protected isAppointmentCurrent(appointmentTime: string): boolean {
    const appointmentDate = new Date();
    const parts = appointmentTime.split(':');
    const appointmentHour = Number(parts[0]);
    const appointmentMinute = Number(parts[1]);
    appointmentDate.setHours(appointmentHour, appointmentMinute, 0, 0);

    const currentDate = new Date();

    const appointmentDatePlus30Minutes = new Date(appointmentDate.getTime() + 30 * 60000);
    const currentDatePlus30Minutes = new Date(currentDate.getTime() + 30 * 60000);

    return appointmentDatePlus30Minutes <= currentDatePlus30Minutes;
  }

  protected terminarCitaActual() {
    this.appointments[0].isDone = false
    if (this.appointments[0].summary == "" && this.appointments[0].isCurrent && !this.appointments[0].isDone) {
      this.citaService.setSummary(this.appointments[0].idAppointment, "Cita cancelada", "Cita cancelada").subscribe(() => {
        this.listAppointments()
      });
    } else {
      this.listAppointments()
    }
  }

  protected summaryDone(){
    this.appointments[0].isDone = true;
    this.appointments[0].summary = "1"
  }


}
