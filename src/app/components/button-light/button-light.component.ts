import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-button-light',
  templateUrl: './button-light.component.html',
  styleUrls: ['./button-light.component.scss']
})
export class ButtonLightComponent {
  @Input() link: string = ''
  @Input() label: string = ''
}
