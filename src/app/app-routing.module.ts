import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page1Component } from './Pages/page1/page1.component';
import { Page2Component } from './Pages/page2/page2.component';
import { Page3Component } from './Pages/page3/page3.component';
import { Page4Component } from './Pages/page4/page4.component';
import { LoginComponent } from './Pages/login/login.component';
import { AuthGuard } from './Services/auth.guard'; // Correctly importing AuthGuard with proper capitalization

const routes: Routes = [
  { path: 'page1', component: Page1Component, canActivate: [AuthGuard] },
  { path: 'page2', component: Page2Component, canActivate: [AuthGuard] },
  { path: 'page3', component: Page3Component, canActivate: [AuthGuard] },
  { path: 'page4', component: Page4Component, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: '', redirectTo: '/page1', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
