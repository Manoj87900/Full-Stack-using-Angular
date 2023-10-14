import { Component, OnInit } from '@angular/core';
import { Employee } from './employee';
import { EmployeeService } from './employee.service';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title(title: any) {
    throw new Error('Method not implemented.');
  }
searchEmployees(arg0: any) {
throw new Error('Method not implemented.');
}
onOpenModal(arg0: null,arg1: string) {
throw new Error('Method not implemented.');
}
  public employees: Employee[] | undefined; 

  constructor(private employeeService: EmployeeService){}

  ngOnInit(){
    this.getEmployees();
  }
  public getEmployees(): void{
    this.employeeService.getEmployees().subscribe(
      (response: Employee[]) => {
        this.employees = response;
        console.log(this.employees);
      },
      (error: HttpErrorResponse) => {
        alert(error.message);
      }

    );
  }
 
}
