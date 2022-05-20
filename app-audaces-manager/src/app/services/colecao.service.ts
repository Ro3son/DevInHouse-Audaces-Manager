import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Colecoes } from '../classes/colecoes';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ColecaoService {

  private requestURL = `${environment.API_URL}colecoes`;

  constructor(private http: HttpClient) { }

  public getColecoes(): Observable<Colecoes[]> {
    return this.http.get<Colecoes[]>(this.requestURL);
  }
}
