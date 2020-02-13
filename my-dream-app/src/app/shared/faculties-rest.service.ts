import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Faculty } from '../faculties/faculties.types';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class FacultyRestService {
    
    apiUrl = 'http://ca-api.witharts.kz';
    
    constructor(private http: HttpClient) {}

    getFaculty(id: string): Observable<Faculty> {
        return this.http.get<Faculty>(`${this.apiUrl}/faculties/${id}`);
    }

    getFaculties(): Observable<Faculty[]> {
        return this.http.get<Faculty[]>(`${this.apiUrl}/faculties`);
    }

    createFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.post<Faculty>(`${this.apiUrl}/faculties`, faculty);
    }

    removeFaculty(id: string): Observable<Faculty> {
        return this.http.delete<Faculty>(`${this.apiUrl}/faculties/${id}`);
    }

    updateFaculty(faculty: Faculty): Observable<Faculty> {
        return this.http.put<Faculty>(`${this.apiUrl}/faculties/${faculty.id}`, faculty);
    }


}