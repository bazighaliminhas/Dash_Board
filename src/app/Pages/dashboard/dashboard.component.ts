import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  standalone: false,
  
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  constructor(private router: Router) {}

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }

  openSettings() {
    const username = localStorage.getItem('username');
    if (username) {
      alert(`Welcome, ${username}`);
    } else {
      alert('No user found in local storage');
    }
  }

  logout() {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
}
