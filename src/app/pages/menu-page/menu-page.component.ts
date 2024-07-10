import { Component, OnInit } from '@angular/core';
import { MenuItem, MenuService } from "../../services/menu.service"

@Component({
  selector: 'app-menu-page',
  templateUrl: './menu-page.component.html',
  styleUrls: ['./menu-page.component.scss']
})
export class MenuPageComponent implements OnInit {
  appetizers: MenuItem[] = []
  mainCourses: MenuItem[] = []
  vegetarianDelights: MenuItem[] = []
  dessertAteliers: MenuItem[] = []
  beverages: MenuItem[] = []

  constructor(private menuService: MenuService) {}

  ngOnInit(): void {
    this.loadAppetizers()
    this.loadMainCourses()
    this.loadVegetarianDelights()
    this.loadDessertAteliers()
    this.loadBeverages()
  }

  loadAppetizers(): void {
    this.menuService.getMenuItems('Appetizers').subscribe(data => {
      this.appetizers = data
    })
  }

  loadMainCourses(): void {
    this.menuService.getMenuItems('Main Courses').subscribe(data => {
      this.mainCourses = data
    })
  }

  loadVegetarianDelights(): void {
    this.menuService.getMenuItems('Vegetarian Delights').subscribe(data => {
      this.vegetarianDelights = data
    })
  }

  loadDessertAteliers(): void {
    this.menuService.getMenuItems('Dessert Ateliers').subscribe(data => {
      this.dessertAteliers = data
    })
  }

  loadBeverages(): void {
    this.menuService.getMenuItems('Beverages').subscribe(data => {
      this.beverages = data
    })
  }
}
