import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormArray, Validators } from '@angular/forms';
import { Student } from '../student.types';
import { StudentRestService } from '../student-rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-student',
  templateUrl: './student.component.html',
  styleUrls: ['./student.component.scss']
})
export class StudentComponent implements OnInit {

  public formSubmitted = false;
  
  form: FormGroup;

  student: Student;

  constructor(
      private studentRestService: StudentRestService,
      private router:Router,
      private route: ActivatedRoute
    )
     { }

  ngOnInit() {

    this.form = new FormGroup({
      firstName: new FormControl('', Validators.required),
      lastName: new FormControl('', Validators.required),
      score: new FormControl(0),
      courses: new FormArray([]),
      // score :  new FormControl('', Validators.required),
    });
    this.route.data.subscribe(data => {
      if (data.student) {
          this.student = data.student;
          this.form.patchValue(data.student);
          if (this.student.courses) {
            this.student.courses.forEach(course => {
              const arrayControl = this.form.get('courses') as FormArray
              arrayControl.push(new FormGroup({
                name: new FormControl(course.name, Validators.required),
              }))
            })
          }
      }
    });
  }

  addCourse() {
    const arrayControl = this.form.get('courses') as FormArray
    arrayControl.push(new FormGroup({
      name: new FormControl('', Validators.required),
    }))
  }

  addStudent() {
    this.formSubmitted = true;
    if (!this.form.valid) {
      return;
    }
    const newStudent: Student = {
      firstName: this.form.get('firstName').value,
      lastName : this.form.value['lastName'],
      score: this.form.value['score'],
      courses: this.form.get('courses').value,
    }
    if (this.student) {
      this.student = {...this.student, ...newStudent};
      this.studentRestService.updateStudent(this.student)
      .subscribe(student => {
        if (student) {
          this.router.navigate(['students']);
        }
      });
      return;
    }
    this.studentRestService.createStudent(newStudent)
    .subscribe(student => {
      if (student) {
        this.router.navigate(['students']);
      }
    });
    this.formSubmitted = false;
    this.form.reset();
  }
}
