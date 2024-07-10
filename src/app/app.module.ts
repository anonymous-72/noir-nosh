import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from "@angular/common/http";
import { ReactiveFormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { HeroComponent } from "./pages/home/components/hero/hero.component"
import { NavLinkComponent } from './components/nav-link/nav-link.component';
import { ButtonDarkComponent } from './components/button-dark/button-dark.component';
import { ButtonLightComponent } from './components/button-light/button-light.component';
import { AboutComponent } from "./pages/home/components/about/about.component";
import { MenuComponent } from "./pages/home/components/menu/menu.component";
import { ReviewComponent } from "./pages/home/components/review/review.component";
import { FooterComponent } from './components/footer/footer.component';
import { FooterLinkComponent } from './components/footer-link/footer-link.component';
import { HomeComponent } from './pages/home/home.component';
import { MenuPageComponent } from './pages/menu-page/menu-page.component';
import { TitleComponent } from './components/title/title.component';
import { ReservationComponent } from './pages/reservation/reservation.component';
import { MenuListComponent } from './pages/menu-page/components/menu-list/menu-list.component';
import { MenuCardComponent } from './pages/menu-page/components/menu-card/menu-card.component';
import { ReservationFormComponent } from './pages/reservation/components/reservation-form/reservation-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavLinkComponent,
    HeroComponent,
    ButtonDarkComponent,
    ButtonLightComponent,
    AboutComponent,
    MenuComponent,
    ReviewComponent,
    FooterComponent,
    FooterLinkComponent,
    HomeComponent,
    MenuPageComponent,
    TitleComponent,
    ReservationComponent,
    MenuListComponent,
    MenuCardComponent,
    ReservationFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
