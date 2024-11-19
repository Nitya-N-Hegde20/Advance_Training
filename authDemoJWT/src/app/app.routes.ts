import { Routes } from '@angular/router';
import { LoginComponent } from './pages/login/login.component';
import { LayoutComponent } from './pages/layout/layout.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';

export const routes: Routes = [{path:"login", component:LoginComponent},
{path:'',redirectTo:"login",pathMatch:"full"},
{path:"layout",component:LayoutComponent},
{path:"dashboard",component:DashboardComponent}

]
;
