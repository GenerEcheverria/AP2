import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-page-list-item',
  templateUrl: './page-list-item.component.html',
  styleUrls: ['./page-list-item.component.css']
})
export class PageListItemComponent {
  @Input() day: string ="";
  @Input() title: string ="";
  @Input() id: number | undefined;
  
  protected deletePage() {
    console.log(this.id)
  }

  protected showPage() {
    console.log(this.id)
  }
}
