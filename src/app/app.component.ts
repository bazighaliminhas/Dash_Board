import { Component, ViewChild } from '@angular/core';
import { MatSidenav } from '@angular/material/sidenav'; // <-- Import MatSidenav


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  standalone: false,
  styleUrl: './app.component.scss'
})
export class AppComponent {
   @ViewChild(MatSidenav) sidenav: MatSidenav | undefined;

  title = 'dashboard-app';
}
