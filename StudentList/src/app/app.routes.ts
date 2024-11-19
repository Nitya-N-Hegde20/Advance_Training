import { Routes } from '@angular/router';
import { StudentsHomeComponent } from './components/start-page/students-home/students-home.component';
import { AddNewComponent } from './components/start-page/add-new/add-new.component';
import { DeleteComponent } from './components/start-page/delete/delete.component';
import { UpdateComponent } from './components/start-page/update/update.component';
import { DetailsComponent } from './components/start-page/details/details.component';
import { StartPageComponent } from './components/start-page/start-page.component';

export const routes: Routes = [{path:'start-student',component:StartPageComponent,
children:[{path:'add-new',component:AddNewComponent},
{path:'delete-student',component:DeleteComponent},
{path:'update-student',component:UpdateComponent},
{path:'details-student',component:DetailsComponent},
{path:'student-home-component',component:StudentsHomeComponent}

]},
{path:'',redirectTo:'start-student',pathMatch:'full'},

];
