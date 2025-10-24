import { Component } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { RouterLinkActive } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterModule, RouterOutlet, RouterLinkActive],
  template: `
    <nav>
      <a routerLink="/customer-form" routerLinkActive="active">Customer Form</a>
      <a routerLink="/customer-response" routerLinkActive="active">Customer Response</a>
      <a routerLink="/workers-dashboard" routerLinkActive="active">Workers Dashboard</a>
    </nav>

    <router-outlet></router-outlet>
  `,
  styleUrls: ['./app.css'],
})
export class AppComponent {}
