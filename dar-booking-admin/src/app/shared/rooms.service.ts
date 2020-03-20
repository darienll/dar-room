import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Room } from './rooms.types';

@Injectable({
    providedIn: 'root'
})
export class RoomsService {
    host = 'http://localhost:3000';

    constructor(private httpClient: HttpClient) {}
    
    getAll(): Observable<Room[]> {
        return this.httpClient.get<Room[]>(`${this.host}/rooms`);
    }
    create(room: Room) {
        return this.httpClient.post<Room>(`${this.host}/rooms`, room);
    }
}