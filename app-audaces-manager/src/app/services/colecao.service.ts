import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Colecoes } from '../classes/colecoes';
import { Observable, take } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private requestURL = `${environment.API_URL}colecoes`;

  constructor(private http: HttpClient) { }

  public getColecoes(): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(this.requestURL);
  }
  public postColecoes(data: Colecoes): Observable<Colecoes[]> {
    return this.http.post<Colecoes[]>(this.requestURL, data);
  }
  public getId(id: number): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(`${this.requestURL}/${id}`);
  }
  public putColecoes(data: Colecoes): Observable<Colecoes[]> {
      return this.http.put<Colecoes[]>(`${this.requestURL}/${data.id}`, data.id);
  }
}
