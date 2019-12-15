import { Exercise } from './../models/exercise';
import { Injectable } from '@angular/core';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ExerciseService {

  // FIELDS
  exercises: Exercise[] = [];
  baseUrl = 'http://localhost:8090/';
  url = this.baseUrl + 'api/exercises';

  // CONSTRUCTORS
  constructor(private http: HttpClient) { }


  // METHODS

  public index() {
    const httpOptions = {
      headers: new HttpHeaders({
        'X-Requested-With': 'XMLHttpRequest'
      })
    };

    return this.http.get<Exercise[]>(this.url, httpOptions)
      .pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('Exercise.index():Error retreiving ');
        })
      );
  }
  public updateTodo(exercise: Exercise) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.put(`${this.url}/${exercise.id}`, exercise, httpOptions).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('ExerciseService.updateTodo:Error updating');
      })
    );
  }
  public delete(id: number) {
    return this.http.delete(`${this.url}/${id}`).pipe(
      catchError((err: any) => {
        console.log(err);
        return throwError('ExerciseService.delete():Error deleting ');
      })
    );
  }
  public create(exercise: Exercise) {
    const httpOptions = {
      headers: {
        'Content-type': 'application/json'
      }
    };
    return this.http.post<Exercise>(
      this.url,
      exercise,
      httpOptions
      ).pipe(
        catchError((err: any) => {
          console.log(err);
          return throwError('exerciseService: Error adding');
        })
      );

  }
}
