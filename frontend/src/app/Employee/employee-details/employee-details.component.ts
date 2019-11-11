import { Component, OnInit } from '@angular/core';
import { EmployeeShema } from '../model/employee-shema';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styles: [`
      .card {margin-left: 30px; margin-top: 10px;}
  `]
})
export class EmployeeDetailsComponent implements OnInit {
  employee: any = [];

  constructor( private route: ActivatedRoute, private employeeService: EmployeeService ) { }

  ngOnInit() {
    // this.route.data.forEach((data) => {
    //   this.employee = data['employee']
    // });
    // tslint:disable-next-line: no-string-literal
    this.employeeService.getEmployee(this.route.snapshot.params['_id'])
      .subscribe((data: {}) => {
        console.log(data);
        this.employee = data;
      })
  }
  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
        this.employeeService.deleteEmployee(employee._id).subscribe((data) => {
          this.employee.splice(index, 1);
        }
      )
    }
  }
}
