import { Routes } from '@angular/router';
import { LoginComponent } from './component/login/login.component';
import { LayoutComponent } from './component/layout/layout.component';
import { AddEmpComponent } from './component/add-emp/add-emp.component';
import { EditEmpComponent } from './component/edit-emp/edit-emp.component';
import { DeleteEmpComponent } from './component/delete-emp/delete-emp.component';

export const routes: Routes = [{path:"login", component:LoginComponent},
{path:'',redirectTo:"login",pathMatch:"full"},
{path:"layout",component:LayoutComponent,
children:[
    {
        path:'add-emp',
        component:AddEmpComponent
    },
    {
        path:'edit-emp',
        component:EditEmpComponent
    },
    {
        path:'delete-emp',
        component:DeleteEmpComponent
    }

]

}
];
