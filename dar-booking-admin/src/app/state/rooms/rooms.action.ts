import { createAction, props } from '@ngrx/store';
import { Room } from 'src/app/shared/rooms.types';

export const getAllRooms = createAction('[Rooms] Get All');

export const setAllRooms = createAction(
  '[Rooms] Set All',
  props<{payload: Room[]}>()
);
