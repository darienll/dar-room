import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Faculty } from '../faculties.types';
import { FacultyRestService } from '../../shared/faculties-rest.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-faculty',
  templateUrl: './faculty.component.html',
  styleUrls: ['./faculty.component.scss']
})
export class FacultyComponent implements OnInit {

  form: FormGroup;

  faculty: Faculty;

  public formSubmitted = false;

  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.form = new FormGroup({
      name: new FormControl('', Validators.required)
    });
    this.route.data.subscribe(data => {
      if (data.faculty) {
        this.faculty = data.faculty;
        this.form.patchValue(data.faculty);  
      }
    })
  }

  addFaculty() {
    this.formSubmitted = true;
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
      this.formSubmitted = false;
  }

}
