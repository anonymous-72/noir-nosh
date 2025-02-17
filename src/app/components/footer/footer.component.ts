import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router"

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  isReservationPage: boolean = false

  constructor (private router: Router) {}

  ngOnInit() {
    this.router.events.subscribe(() => {
      this.isReservationPage = this.router.url === '/reservation'
    })
  }
}
