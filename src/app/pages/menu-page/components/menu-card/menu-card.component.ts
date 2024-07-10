import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-menu-card',
  templateUrl: './menu-card.component.html',
  styleUrls: ['./menu-card.component.scss']
})
export class MenuCardComponent {
  @Input() type: string = ''
  @Input() image: string = ''
  @Input() name: string = ''
  @Input() description: string = ''
  @Input() price: number = 0
}
