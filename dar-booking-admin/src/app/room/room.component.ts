import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Room } from '../shared/rooms.types';
import { RoomsService } from '../shared/rooms.service';
import { Route } from '@angular/compiler/src/core';
import { Router, ActivatedRoute } from '@angular/router';
import { mergeMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { environment } from '../../environments/environment';
import { UploadFile } from 'ng-zorro-antd';


@Component({
  selector: 'app-room',
  templateUrl: './room.component.html',
  styleUrls: ['./room.component.scss']
})
export class RoomComponent implements OnInit {

  form: FormGroup;

  room: Room;

  loading: boolean;

  isLoading: boolean;

  environment = environment;

  constructor(
    private roomsService: RoomsService,
    private router: Router,
    private route: ActivatedRoute,
  ) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      name: new FormControl('', Validators.required),
      imageUrl: new FormControl(''),
    });

    this.route.paramMap
    .pipe(
      mergeMap(params => {
        if (params.get('id')) {
          return this.roomsService.getById(+params.get('id'));
        }
        return of(null);
      })
    )
    .subscribe(room => {
      this.room = room;

      if (this.room) {
        this.form.patchValue(this.room);
      }
    });
  }

  onSubmit() {
    for (const i in this.form.controls) {
       if (this.form.controls[i]) {
        this.form.controls[i].markAsDirty();
        this.form.controls[i].updateValueAndValidity();
       }
    }

    if (!this.form.valid) {
      return;
    }

    this.isLoading = true;
    if (this.room) {
      this.roomsService.update({...this.room, ...this.form.value})
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res) {
          this.router.navigate(['home', 'rooms']);
        }
        this.isLoading = false;
      });
      return;
    }

    this.roomsService.create(this.form.value)
      .pipe(catchError(() => of(null)))
      .subscribe(res => {
        if (res && res.id) {
          this.router.navigate(['home', 'rooms']);
          this.isLoading = false;
        }
      });
  }

  handleChange(info: { file: UploadFile }): void {
    switch (info.file.status) {
      case 'uploading':
        this.loading = true;
        break;
      case 'done':
        // Get this url from response in real world.
        console.log(info.file);
        this.loading = false;
        this.form.get('imageUrl').setValue(info.file.response.filename)
        break;
      case 'error':
        this.loading = false;
        break;
    }
  }

}
