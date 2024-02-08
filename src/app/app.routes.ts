import { Routes } from '@angular/router';
import { HomePageComponent } from './pages';

export const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./pages/pages.module').then((m) => m.PagesModule)
    }
]