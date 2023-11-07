import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { PacienteService } from '../../services/paciente.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit{
  usuarios!: any[];
  filtroUsuarios !: any [];
  filtroNombre: string = '';

  constructor(private router: Router,private pacienteService:PacienteService){ }

  ngOnInit(): void {
    this.pacienteService.getAllPacientes().subscribe(data => {
      this.usuarios = data as any[];
      this.filtroUsuarios = data as any[];
   })
  }

  filtrarPorNombre() {
    return this.usuarios.filter(usuario =>
      usuario.name.toLowerCase().includes(this.filtroNombre.toLowerCase())
    );
  }

  navegarAExpediente(id: number) {
    this.router.navigate([`/expediente/${id}`]);
  }
}
