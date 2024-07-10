import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-button-dark',
  templateUrl: './button-dark.component.html',
  styleUrls: ['./button-dark.component.scss']
})
export class ButtonDarkComponent {
  @Input() link: string = ''
  @Input() label: string = ''
  @Input() customClass: string = ''
}
