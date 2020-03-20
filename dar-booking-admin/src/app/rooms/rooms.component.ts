import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { RoomsService } from '../shared/rooms.service';
import { Store, select } from '@ngrx/store';
import { RoomsState } from '../state/rooms/room.reducer';
import { Room } from '../shared/rooms.types';
import { getAllRooms } from '../state/rooms/rooms.action';

@Component({
  selector: 'app-rooms',
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.scss']
})
export class RoomsComponent implements OnInit {


  constructor(private store: Store<{room: RoomsState}>) { }

  rooms: Room[] = [];

  ngOnInit() {
    this.store.pipe(select('room'))
      .subscribe(data=> {
        this.rooms = data.rooms;
      });
      console.log(this.rooms);
    this.store.dispatch(getAllRooms());
  }

}
