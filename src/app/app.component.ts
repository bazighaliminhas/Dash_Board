import { Component, ViewChild, AfterViewInit } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent implements AfterViewInit {
  @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;
  title = 'dashboard-app';
  isLoginPage: boolean = false;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) {}

  ngOnInit() {
    // Check if the user is logged in, if so, set isLoginPage to false
    this.router.events.subscribe(() => {
      this.isLoginPage = this.router.url === '/login';
    });
  
    const isLoggedIn = !!localStorage.getItem('userToken'); // Check login status on page load
    if (!isLoggedIn && this.router.url !== '/login') {
      this.router.navigate(['/login']);  // Redirect to login if not logged in and not already on the login page
    }
  }
  

  ngAfterViewInit() {
    if (this.sidenav) {
      this.sidenav.opened = true;
    }
  }

  logout(): void {
    localStorage.removeItem('userToken');
    localStorage.removeItem('username');
    this.router.navigate(['/login']);
  }
  

  openSettings() {
    const username = localStorage.getItem('username');
    console.log('Settings button clicked');
    if (username) {
      alert(`Welcome, ${username}`);
    } else {
      alert('No user found in local storage');
    }
  }  

  toggleSidenav() {
    if (this.sidenav) {
      this.sidenav.toggle();
    }
  }
}