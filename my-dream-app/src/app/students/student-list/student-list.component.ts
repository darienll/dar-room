import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types'
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { StudentRestService } from '../../shared/student-rest.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-student-list',
  templateUrl: './student-list.component.html',
  styleUrls: ['./student-list.component.scss']
})
export class StudentListComponent implements OnInit {
  public searchQuery = '';
  
  public formSubmited = false;
  
  form: FormGroup;

  public studentsToShow: Student[] = [];

  public students: Student[];

  constructor(
    private studentRestService: StudentRestService,
    private router: Router
    ) {}

  ngOnInit() {
    this.studentRestService.getStudents()
      .subscribe(students => {
        this.students = students;
        this.studentsToShow = [...this.students];
      });
  }

  search() {
    this.studentsToShow = this.students.filter(student => student.firstName.includes(this.searchQuery));
  }

  
  removeStudent(id: any) {
    let removedIndex = this.students.map(function(item) {return item.id;}).indexOf(id);
    this.students.splice(removedIndex, 1);
    this.studentsToShow = [...this.students];
  }

  editStudent(student: Student) {
    this.router.navigate(['student', student.id]);
  }

}


 


