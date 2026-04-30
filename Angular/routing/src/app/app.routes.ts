import { Routes } from '@angular/router';
import { Home } from './components/home/home';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { Users } from './components/users/users';
import { Fruit } from './components/fruit/fruit';

export const routes: Routes = [
    {path:'home', component: Home},
    {path:'login', component: Login},
    // { path: '', redirectTo: 'home', pathMatch: 'full' }
    {path: 'register', component: Register},
    {path: 'users', component: Users},
    {path:'fruit', component:Fruit},
    { path: '', component: Login }
];
