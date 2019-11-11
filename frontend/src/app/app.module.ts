import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CreateComponent } from './Employee/create/create.component';
import { ListComponent } from './Employee/list/list.component';
import { EditComponent } from './Employee/edit/edit.component';
import { EmployeeService } from './employee-service.service';
import { EmployeeDetailsComponent } from './Employee/employee-details/employee-details.component';
import { EmployeeResolverService } from './Employee/employee-resolver.service';


@NgModule({
  declarations: [
    AppComponent,
    CreateComponent,
    ListComponent,
    EditComponent,
    EmployeeDetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule
  ],
  providers: [
    EmployeeService,
    EmployeeResolverService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
