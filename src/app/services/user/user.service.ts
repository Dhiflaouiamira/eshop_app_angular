import { User } from '../../models/user';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private clientPhoneNumber: string | null = null; // Initialize the variable to store the client's phone number

  endpoint = environment.API_URL + '/users';
  private users: User[] = []

  constructor(private http: HttpClient) { }

  findAll() {
    return this.http.get<User[]>(this.endpoint);
  }

  addUser(user: User) {
    delete user._id;
    console.log(user)
    return this.http.post<User>(this.endpoint, user).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 409) {
          alert('User already exists.');
        }
        return throwError(error);
      })
    );
  }

  updateUser(user: User) {
    return this.http.put<User>(`${this.endpoint}/${user._id}`, user);
  }

  findById(userId: string) {
    return this.http.get<User>(`${this.endpoint}/${userId}`);
  }

  deleteUser(userId: string) {
    return this.http.delete(`${this.endpoint}/${userId}`);
  }

  getUser(_id: string) {
    return this.http.get<User>(`${this.endpoint}/${_id}`);
  }

  getAllUsers(): User[] {
    return this.users;
  }



  searchUsers(searchTerm: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}?search=${searchTerm}`)
  }

  filterbyrole(role: string): Observable<User[]> {
    return this.http.get<User[]>(`${this.endpoint}?role=${role}`);
  }



 
  
}



