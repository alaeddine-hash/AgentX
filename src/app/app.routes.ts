import {Routes} from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { 
    path: 'login', 
    loadComponent: () => import('./pages/login').then(m => m.LoginComponent) 
  },
  {
    path: '',
    loadComponent: () => import('./layout/main-layout').then(m => m.MainLayoutComponent),
    children: [
      { path: 'hub', loadComponent: () => import('./pages/hub').then(m => m.HubComponent) },
      { path: 'engine', loadComponent: () => import('./pages/engine').then(m => m.EngineComponent) },
      { path: 'calendar', loadComponent: () => import('./pages/calendar').then(m => m.CalendarComponent) },
      { path: 'profile', loadComponent: () => import('./pages/profile').then(m => m.ProfileComponent) }
    ]
  },
  { path: '**', redirectTo: 'login' }
];
