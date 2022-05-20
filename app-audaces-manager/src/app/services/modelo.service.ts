import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Modelos } from '../classes/modelos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ModeloService {

  private requestURL = `${environment.API_URL}modelos`;

  constructor(private http: HttpClient) { }

  public getModelos(): Observable<Modelos[]> {
    return this.http.get<Modelos[]>(this.requestURL);
  }
}
