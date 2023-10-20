import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './pages/login/login.component';
import { MiCuentaComponent } from './pages/mi-cuenta/mi-cuenta.component';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { HeaderComponent } from './shared/header/header.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { MenuOptionComponent } from './shared/buttons/menu-option/menu-option.component';
import { RegisterComponent } from './pages/register/register.component';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { DatePipe } from '@angular/common';
import { CitaComponent } from './pages/cita/cita.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { DatosEmbarazadaComponent } from './pages/expedientes/components/datos-embarazada/datos-embarazada.component';
import { InformacionCitaComponent } from './pages/expedientes/components/informacion-cita/informacion-cita.component';
import { InformacionMedicaPacienteComponent } from './pages/expedientes/components/informacion-medica-paciente/informacion-medica-paciente.component';
import { InformacionDiarioPacienteComponent } from './pages/expedientes/components/informacion-diario-paciente/informacion-diario-paciente.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MiCuentaComponent,
    MainLayoutComponent,
    HeaderComponent,
    SidebarComponent,
    MenuOptionComponent,
    RegisterComponent,
    CitaComponent,
    ExpedientesComponent,
    DatosEmbarazadaComponent,
    InformacionCitaComponent,
    InformacionMedicaPacienteComponent,
    InformacionDiarioPacienteComponent,
    DiarioComponent,
    DashboardComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule
  ],

  providers: [DatePipe],
  bootstrap: [AppComponent]
})

export class AppModule { }
