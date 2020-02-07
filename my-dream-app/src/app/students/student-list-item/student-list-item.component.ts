import { Component, OnInit, Input, Inject, Output, EventEmitter, TemplateRef, ViewChild } from '@angular/core';
import { Student } from '../student.types';
import { StudentRestService } from '../student-rest.service';
import { StudentListComponent } from '../student-list/student-list.component';
import { Router } from '@angular/router';

@Component({
  selector: '[app-student-list-item]',
  templateUrl: './student-list-item.component.html',
  styleUrls: ['./student-list-item.component.scss']
})
export class StudentListItemComponent implements OnInit {


  @Input() student: Student;

  @Output() removed = new EventEmitter<string>();

  @Output() updated = new EventEmitter<string>();
  
  constructor(
    private studentRestService: StudentRestService,
    private router: Router
    ) { }

  ngOnInit() {}

  removeStudent() {
    console.log("in remove student");
    console.log(this.student.id);
    this.studentRestService.removeStudent(this.student.id).subscribe(student => {
        console.log(student);
        this.removed.emit(student.id)
      })
  }

  updateStudent() {
    console.log("in update student");
    this.updated.emit(this.student.id);
  }

  editStudent() {
    this.router.navigate(['students','student', this.student.id]);

  }



}
