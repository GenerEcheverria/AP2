import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainLayoutComponent } from './shared/main-layout/main-layout.component';
import { LoginComponent } from './pages/login/login.component';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './pages/register/register.component';
import { MiCuentaComponent } from "./pages/mi-cuenta/mi-cuenta.component";
import { CitaComponent } from './pages/cita/cita.component';
import { DiarioComponent } from './pages/diario/diario.component';
import { ExpedientesComponent } from './pages/expedientes/expedientes.component';
import { AuthGuard } from './guards/auth.guard';
import { RoleGuard } from './guards/role.guard';


const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent},
  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [AuthGuard],
    children: [
      {path: '', redirectTo: '', pathMatch: 'full'},
      {path: 'mi-cuenta', component: MiCuentaComponent, canActivate: [RoleGuard], data: { roles: ['Doctor'] }},
      {path: 'cita', component: CitaComponent, canActivate: [RoleGuard], data: { roles: ['Patient'] }},
      {path: 'diario', component: DiarioComponent, canActivate: [RoleGuard], data: { roles: ['Patient'] }},
      {path: 'expediente', component: ExpedientesComponent, canActivate: [RoleGuard], data: { roles: ['Doctor'] }},
      {path: '**', redirectTo: '', pathMatch: 'full'},
    ]
  }
];

@NgModule({
  imports: 
  [FormsModule,
    RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
