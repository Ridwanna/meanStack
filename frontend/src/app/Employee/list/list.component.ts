import { Component, OnInit } from '@angular/core';
import { EmployeeService } from 'src/app/employee-service.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {
  Employee: any = [];

  constructor(private employeeService: EmployeeService) {
    this.readEmployee();
  }

  ngOnInit() {}

  readEmployee(){
    this.employeeService.getEmployees().subscribe((data) => {
     this.Employee = data;
    })
  }

  removeEmployee(employee, index) {
    if (window.confirm('Are you sure?')) {
        this.employeeService.deleteEmployee(employee._id).subscribe((data) => {
          this.Employee.splice(index, 1);
        }
      )
    }
  }
}
