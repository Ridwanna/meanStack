import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot } from '@angular/router';
import { EmployeeService } from '../employee-service.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeResolverService implements Resolve<any> {

  constructor( private employeeService: EmployeeService) { }

  resolve(route: ActivatedRouteSnapshot) {
    // tslint:disable-next-line: no-string-literal
    return this.employeeService.getEmployee(route.params['id']);
  }
}
