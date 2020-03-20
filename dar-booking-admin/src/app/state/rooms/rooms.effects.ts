import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError } from 'rxjs/operators';
import { EMPTY } from 'rxjs';
import { RoomsService } from 'src/app/shared/rooms.service';

@Injectable()
export class RoomsEffect {
  loadRooms$ = createEffect(() => this.actions$.pipe(
    ofType('[Rooms] Get All'),
    mergeMap(() => this.roomsService.getAll()
      .pipe(
        map(rooms => ({type: '[Rooms] Set All', payload: rooms})),
        catchError(() => EMPTY)
      )),
  ));

  constructor(
    private actions$: Actions,
    private roomsService: RoomsService,
  ) {}
}
