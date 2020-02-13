import { Observable } from 'rxjs';
import { Student } from '../students/student.types';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root'
})
export class StudentRestService {
    
    apiUrl = 'http://ca-api.witharts.kz';
    constructor(private http: HttpClient) {}

    getStudent(id: string): Observable<Student> {
        return this.http.get<Student>(`${this.apiUrl}/students/${id}`)
    }

    getStudents(): Observable<Student[]> {
        return this.http.get<Student[]>(`${this.apiUrl}/students`);
    }

    createStudent(student: Student): Observable<Student> {
        return this.http.post<Student>(`${this.apiUrl}/students`, student);
    }
    
    removeStudent(id: string): Observable<Student> {
        return this.http.delete<Student>(`${this.apiUrl}/students/${id}`);
    }

    updateStudent(student: Student): Observable<Student> {
        return this.http.put<Student>(`${this.apiUrl}/students/${student.id}`, student);
    }

}
