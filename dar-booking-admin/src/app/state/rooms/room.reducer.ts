import { Room } from 'src/app/shared/rooms.types';
import { createReducer, on } from '@ngrx/store';
import { setAllRooms } from './rooms.action';


export interface RoomsState {
  rooms: Room[];
}

export const initialState: RoomsState = {
  rooms: [],
};

const _roomsReducer = createReducer(initialState,
  on(setAllRooms, (state, action) => ({...state, rooms: action.payload}))
);

export function roomsReducer(state, action) {
  return _roomsReducer(state, action);
}



