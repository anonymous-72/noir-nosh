import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";

export interface MenuItem {
  _id: string,
  name: string,
  type: {
    _id: string,
    type: string
  },
  description: string,
  price: number,
  image: string
}

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menus'

  constructor(private http: HttpClient) { }

  getMenuItems(type?: string): Observable<MenuItem[]> {
    let url = this.apiUrl
    if (type) {
      url += `?type=${type}`
    }

    return this.http.get<MenuItem[]>(url)
  }
}
