import { Routes } from '@angular/router';
import { MenuOption } from './core/types/menu-options';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full',
  },
  {
    path: 'home',
    // component: Home,
    loadComponent: () => import('./home/home'),
    title: 'Home Page | Demo Routes',
    data: { label: 'Inicio' },
  },
  {
    path: 'user',
    // component: Login,
    loadComponent: () => import('./user/user-page'),
    title: 'User Page | Demo Routes',
    data: { label: 'Usuario' },

  },
  {
    path: 'tasks',
    // component: Tasks,
    loadComponent: () => import('./tasks/tasks'),
    title: 'Tasks Page | Demo Routes',
    data: { label: 'Tareas' },
  },
  {
    path: 'about',
    loadComponent: () => import('./about/about'),
    title: 'About Page | Demo Routes',
    data: { label: 'Acerca de' },
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];


export const MENU_OPTIONS: MenuOption[] = routes
  .filter((route) => route.data && route.data['label'])
  .map((route) => ({
    label: route.data!['label'],
    path: route.path!
  }));

