import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'portfolio',
    pathMatch: 'full'
  },
  {
    path: 'portfolio',
    loadComponent: () => import('./portfolio/portfolio.component').then(m => m.PortfolioComponent)
  },
  {
    path: 'welcome',
    loadComponent: () => import('./default-welcome/default-welcome.component').then(m => m.DefaultWelcomeComponent)
  },
  {
    path: '**',
    redirectTo: 'portfolio'
  }
];
