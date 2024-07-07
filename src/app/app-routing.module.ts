import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from "./pages/home/home.component";
import { MenuPageComponent } from "./pages/menu-page/menu-page.component";
import {ReservationComponent} from "./pages/reservation/reservation.component";

const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    title: 'Noir Nosh'
  },
  {
    path: 'menu',
    component: MenuPageComponent,
    title: 'Menu'
  },
  {
    path: 'reservation',
    component: ReservationComponent,
    title: 'Reservation'
  },
  {
    path: '', redirectTo: 'home', pathMatch: 'full',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
