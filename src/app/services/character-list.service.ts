import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

// Service that fetches Characters and their details from Star Wars: A New Hope

@Injectable({
  providedIn: 'root'
})
export class CharacterListService {
  private movieApiUrl = 'https://swapi.dev/api/films/1';
  constructor(private http:HttpClient) { }

  getMovie(): Observable<any>{
    return this.http.get<any>(this.movieApiUrl);
  }

  getCharacter(url: any): Observable<any>{
    return this.http.get<any>(url);
  }
}
