import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateComponent } from './Employee/create/create.component';
import { EditComponent } from './Employee/edit/edit.component';
import { ListComponent } from './Employee/list/list.component';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeResolverService } from './Employee/employee-resolver.service';


const routes: Routes = [
  {path: '', redirectTo: 'list', pathMatch: 'full'},
  {path: 'create', component: CreateComponent},
  {path: 'edit/:id', component: EditComponent},
  {path: 'list', component: ListComponent},
  { path: 'read/:_id', component: EmployeeDetailsComponent }
  // { path: 'read/:_id', component: EmployeeDetailsComponent, resolve: {employee: EmployeeResolverService}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
