import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-appointment-list-item',
  templateUrl: './appointment-list-item.component.html',
  styleUrls: ['./appointment-list-item.component.css']
})
export class AppointmentListItemComponent {
  @Input() patient!: string
  @Input() time!: string
  @Input() isCurrent!: boolean

}
