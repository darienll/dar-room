import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Faculty } from '../faculties.types';
import { FacultyRestService } from '../../shared/faculties-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: '[app-faculty-list-item]',
  templateUrl: './faculty-list-item.component.html',
  styleUrls: ['./faculty-list-item.component.scss']
})
export class FacultyListItemComponent implements OnInit {

  @Input() faculty: Faculty;

  @Output() removed = new EventEmitter<string>();


  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router,
    ) { }

  ngOnInit() {
  }

  removeFaculty() {
    console.log("in remove faculty");
    this.facultyRestService.removeFaculty(this.faculty.id)
      .subscribe(faculty => {
        this.removed.emit(faculty.id);
      })
  }

  editFaculty() {
    this.router.navigate(['faculties','faculty', this.faculty.id]);
 
  }

}
