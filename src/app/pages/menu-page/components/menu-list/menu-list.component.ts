import { Component, Input, OnInit } from '@angular/core';
import { MenuItem } from "../../../../services/menu.service"

@Component({
  selector: 'app-menu-list',
  templateUrl: './menu-list.component.html',
  styleUrls: ['./menu-list.component.scss']
})
export class MenuListComponent implements OnInit {
  @Input() title: string = ''
  @Input() type: string = ''
  @Input() items: MenuItem[] = []

  constructor() {}

  ngOnInit(): void {}
}
