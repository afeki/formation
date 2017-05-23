import { environment } from './../../../environments/environment';
import { Formation } from './../models/formation';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class FormationService {

  constructor(private http: Http) { }

  fetch(): Observable<Formation[]> {
    return this.http.get(`${environment.apiUrl}/formations`)
      .map((res: Response) => res.json());
  }

  save(model: Formation): Observable<Formation> {
    return this.http.post(`${environment.apiUrl}/formations`, model)
      .map((res: Response) => res.json());
  }

  find(id): Observable<Formation> {
    return this.http.get(`${environment.apiUrl}/formations/${id}`)
      .map((res: Response) => res.json());
  }

  remove(id): Observable<Formation> {
    return this.http.delete(`${environment.apiUrl}/formations/${id}`)
      .map((res: Response) => res.json());
  }

  put(id, model): Observable<Formation> {
    return this.http.put(`${environment.apiUrl}/formations/${id}`, model)
      .map((res: Response) => res.json());
  }

}
