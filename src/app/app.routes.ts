import { Routes } from '@angular/router';
import { DescripcionComponent } from './components/descripcion/descripcion.component';
import { HomeComponent } from './components/home/home.component';
import { ErrorComponent } from './components/error/error.component';

export const routes: Routes = [

    { path: 'home', component: HomeComponent},

    { path: '', redirectTo: '/home', pathMatch: 'full' },

    {
        path: 'descripcion/:id',
        component: DescripcionComponent
    },

    {
        path: '**', component: ErrorComponent
    }
];
