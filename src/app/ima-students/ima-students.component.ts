import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {FormControl} from "@angular/forms";
import {ActivatedRoute} from "@angular/router";

interface Student {
  name: string;
  studyProgram: string;
  description?: string;
}

@Component({
  selector: 'app-ima-students',
  templateUrl: './ima-students.component.html',
  styleUrls: ['./ima-students.component.scss']
})
export class ImaStudentsComponent implements OnInit {

  imaStudents: Student[] = []
  filteredStudents: Student[] = []
  filterFormControl = new FormControl('')

  constructor(private http: HttpClient, private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.http.get<Student[]>('/assets/imaStudents.json').subscribe(students => {
      this.imaStudents = students;
      this.filter(this.filterFormControl.value)
    });

    this.filterFormControl.valueChanges.subscribe(value => this.filter(value));

    this.route.paramMap.subscribe(params => {
      this.filterFormControl.setValue(params.get('filter'));
    })
  }

  filter(filterValue: string) {
    this.filteredStudents = this.imaStudents
      .filter(student => !filterValue || student.studyProgram.toLowerCase().includes(filterValue.toLowerCase()));
  }

}
