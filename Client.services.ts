import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, throwError } from "rxjs";
import { catchError } from 'rxjs/operators'
import { HttpClient, HttpXhrBackend, HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { environment } from 'environments/environment';
import { ApiResponse } from 'models/api-response.model'

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  baseUrl = environment.baseUrl;
  constructor(private router:Router, private http: HttpClient) { }

  handleError(error: HttpErrorResponse) {
    return throwError(error);
  }

  createClients(objCandidate:any) {
    return this.http.post<ApiResponse>(this.baseUrl + `Client/CreateClients`,objCandidate).pipe(catchError(this.handleError));
  }
}
