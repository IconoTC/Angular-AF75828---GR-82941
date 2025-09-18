import { Observable } from "rxjs";

export interface RepoSync<T extends { id: number | string }> {
  getAll(): T[];
  getById(id: T['id']): T; // Throw Error en caso de no encontrado
  add(item: T): void; // Throw Error en caso de error
  update(id: T['id'], item: T): void; // Throw Error en caso de no encontrado
  delete(id: T['id']): void; // Throw Error en caso de no encontrado
}

export interface Repo<T extends { id: number | string }, D> {
  getAll(): Promise<T[]>;
  getById(id: T['id']): Promise<T>; // Throw Error en caso de no encontrado
  add(item: D): Promise<T>; // Throw Error en caso de error
  update(id: T['id'], item: T): Promise<void>; // Throw Error en caso de no encontrado
  // patch(id: T['id'], item: Partial<T>): Promise<void>; // Throw Error en caso de no encontrado
  delete(id: T['id']): Promise<void>; // Throw Error en caso de no encontrado
}

export interface RepoRx<T extends { id: number | string }, D> {
  getAll(): Observable<T[]>;
  getById(id: T['id']): Observable<T>; // Throw Error en caso de no encontrado
  add(item: D): Observable<T>; // Throw Error en caso de error
  update(id: T['id'], item: T): Observable<void>; // Throw Error en caso de no encontrado
  // patch(id: T['id'], item: Partial<T>): Observable<void>; // Throw Error en caso de no encontrado
  delete(id: T['id']): Observable<void>; // Throw Error en caso de no encontrado
}
