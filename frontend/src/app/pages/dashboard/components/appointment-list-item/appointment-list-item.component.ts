import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-appointment-list-item',
  templateUrl: './appointment-list-item.component.html',
  styleUrls: ['./appointment-list-item.component.css']
})
export class AppointmentListItemComponent {
  @Input() patient!: string
  @Input() time!: string
  @Input() data!: any
  @Input() isCurrent!: boolean
  @Output() activarFuncionEvent = new EventEmitter<any>();

  activarFuncion() {
    this.activarFuncionEvent.emit(this.data);
  }
}
