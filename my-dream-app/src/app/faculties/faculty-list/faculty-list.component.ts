import { Component, OnInit } from '@angular/core';
import { Faculty } from '../faculties.types';
import { FacultyRestService } from '../faculties-rest.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-faculty-list',
  templateUrl: './faculty-list.component.html',
  styleUrls: ['./faculty-list.component.scss']
})
export class FacultyListComponent implements OnInit {
  
  public searchQuery = '';

  public faculties: Faculty[];

  public facultiesToShow: Faculty[] = [];

  constructor(
    private facultyRestService: FacultyRestService,
    private router: Router
  ) { }

  ngOnInit() {
    this.facultyRestService.getFaculties()
      .subscribe(faculties => {
        console.log(faculties);
        this.faculties = faculties;
        this.facultiesToShow = [...this.faculties];
      })
  }
  
  search() {
    this.facultiesToShow = this.faculties.filter(faculty => faculty.name.includes(this.searchQuery));
  }

  removeFaculty(id: any) {
    let removedIndex = this.faculties.map(function(item) {return item.id;}).indexOf(id);
    this.faculties.splice(removedIndex, 1);
    this.facultiesToShow = [...this.faculties];
  }
  
  editFaculty(faculty: Faculty) {
    this.router.navigate(['faculty', faculty.id]);
  }

}
