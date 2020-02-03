import { Component, OnInit } from '@angular/core';
import { Student } from '../student.types'
import { ThrowStmt } from '@angular/compiler';
import { FormGroup, FormControl, Validators, FormArray } from '@angular/forms';
import { StudentRestService } from '../student-rest.service';
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
        console.log(students)
        this.students = students;
        this.studentsToShow = [...this.students];
      });
    // this.form = new FormGroup({
    //   firstName: new FormControl('', Validators.required),
    //   lastName: new FormControl('', Validators.required),
    //   courses: new FormArray([]),
    //   // score :  new FormControl('', Validators.required),
    // });
  }

  search() {
    this.studentsToShow = this.students.filter(student => student.firstName.includes(this.searchQuery));
  }

  // addCourse() {
  //   const arrayControl = this.form.get('courses') as FormArray
  //   arrayControl.push(new FormGroup({
  //     name: new FormControl('', Validators.required),
  //   }))
  // }

  // removeAllFromCourses() {
  //   const arrayControl = this.form.get('courses') as FormArray
  //   arrayControl.clear();
  // }

  // addStudent() {
  //   this.formSubmited = true;
  //   if (!this.form.valid) {
  //     return;
  //   }
  //   const newStudent: Student = {
  //     firstName: this.form.get('firstName').value,
  //     lastName : this.form.value['lastName'],
  //     score: 0,
  //     courses: this.form.get('courses').value,
  //   }
  //   if (this.isUpdate) {
  //     newStudent.id = this.id;
  //     this.studentRestService.updateStudent(newStudent)
  //       .subscribe(student => {
  //         let indx = this.students.findIndex(x => x.id === this.id);
  //         this.students[indx] = student;
  //         this.studentsToShow = [...this.students];
  //       })
  //   }
  //   else {
  //     this.studentRestService.createStudent(newStudent)
  //     .subscribe(student => {
  //       this.students.push(student);
  //       this.studentsToShow = [...this.students];
  //     })
  //   }
  //   this.isUpdate = false;
  //   this.formSubmited = false;
  //   this.form.reset();
  // }
  
  removeStudent(id: any) {
    let removedIndex = this.students.map(function(item) {return item.id;}).indexOf(id);
    this.students.splice(removedIndex, 1);
    this.studentsToShow = [...this.students];
  }

  editStudent(student: Student) {
    this.router.navigate(['student', student.id]);
  }

  // updateStudent(id: any) {
  //   console.log("in update student - list ");
  //   let student = this.students.find(student => student.id === id)
  //   console.log(student);
  //   let courses = student.courses === null ? [] : student.courses;
  //   this.removeAllFromCourses();
  //   for (let _ in courses) {
  //     this.addCourse();
  //   }
  //   this.form.setValue({
  //     firstName: student.firstName,
  //     lastName: student.lastName,
  //     courses: courses
  //   });
  //   this.isUpdate = true;
  //   this.id = id;
  // }
}


 


