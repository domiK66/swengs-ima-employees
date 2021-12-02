import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormControl } from "@angular/forms";
import { ActivatedRoute } from "@angular/router";

interface Employee {
  name: string;
  image: string;
  position: string;
  description?: string;
}

@Component({
  selector: 'app-ima-employees',
  templateUrl: './ima-employees.component.html',
  styleUrls: ['./ima-employees.component.scss']
})

export class ImaEmployeesComponent implements OnInit {

  allEmployees: Employee[] = []
  filteredEmployees: Employee[] = [];

  filterFormControl = new FormControl('')

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit(): void {

    this.http.get<Employee[]>('/assets/imaEmployees.json').subscribe(
      allEmployees => {
          //const firstEmployee = allEmployees[0];
          //alert(firstEmployee.name);
          this.allEmployees = allEmployees;
          this.filter(this.filterFormControl.value);
      }
    );

    this.filterFormControl.valueChanges.subscribe(value => this.filter(value));

    this.route.paramMap.subscribe(params => {
      this.filterFormControl.setValue(params.get('filter'));
    });

  }

  filter(filterValue: string) {
    this.filteredEmployees = this.allEmployees.filter(employee => {
      return !filterValue || employee.name.toLowerCase().includes(filterValue.toLowerCase())
        || employee.position.toLowerCase().includes(filterValue.toLowerCase());
      }
    );
  }
}
