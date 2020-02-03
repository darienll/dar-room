import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Faculty } from '../faculties.types';
import { FacultyRestService } from '../faculties-rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  form: FormGroup;

  faculty: Faculty;

  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.route.params.subscribe(params => {
      if (params.id) {
        this.facultyRestService.getFaculty(params.id)
          .subscribe(faculty => {
            this.faculty = faculty;
            this.form.patchValue(this.faculty);
          })
      }
    })
  }

  addFaculty() {
    if (!this.form.valid) return;
    const newFaculty: Faculty = {
      name: this.form.get('name').value,
    }
    if (this.faculty) {
      this.faculty = {...this.faculty, ...newFaculty};
      this.facultyRestService.updateFaculty(this.faculty)
        .subscribe(faculty => {
          if (faculty) {
            this.router.navigate(['faculties']);
          }
        });
        return;
    }
    this.facultyRestService.createFaculty(newFaculty)
      .subscribe(faculty => {
        if (faculty) {
          this.router.navigate(['faculties']);
        }
      })
  }

}
