import { inject, Injectable } from '@angular/core';
import { RepoRx } from '../../core/types/repo';
import { ID, Note, NoteDTO } from '../models/notes';
import { environment } from '../../../environments/environment.development';
import { catchError, map, Observable } from 'rxjs';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiRepo implements RepoRx<Note, NoteDTO> {
  private http = inject(HttpClient);
  private urlBase = environment.apiUrl + '/notes';

  getAll(): Observable<Note[]> {
    const result$ = this.http.get<Note[]>(this.urlBase).pipe(
      map((notes) => {
        return notes.map((note) => {
          // eslint-disable-next-line @typescript-eslint/no-explicit-any
          const temp = note as any;
          if (temp['description']) {
            temp.title = temp['description'];
          }
          return temp;
        });
      }),
      catchError((err: HttpErrorResponse) => {
        console.error('Error in ApiRepo.getAll:', err);
        throw err;
      }),
    );

    console.log('ApiRepo.getAll');
    return result$;
  }

  getById(id: ID): Observable<Note> {
    return this.http.get<Note>(`${this.urlBase}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Error in ApiRepo.getById:', err);
        throw err;
      }),
    );
  }

  add(item: NoteDTO): Observable<Note> {
    return this.http.post<Note>(`${this.urlBase}`, item).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Error in ApiRepo.add:', err);
        throw err;
      }),
    );
  }

  update(id: ID, item: NoteDTO): Observable<void> {
    //  this.http.put<Note>(`${this.urlBase}/${id}`, item);
    //  return of(undefined);
    return this.http.patch<void>(`${this.urlBase}/${id}`, item).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Error in ApiRepo.update:', err);
        throw err;
      }),
    );
  }

  delete(id: ID): Observable<void> {
    return this.http.delete<void>(`${this.urlBase}/${id}`).pipe(
      catchError((err: HttpErrorResponse) => {
        console.error('Error in ApiRepo.delete:', err);
        throw err;
      }),
    );
  }
}
