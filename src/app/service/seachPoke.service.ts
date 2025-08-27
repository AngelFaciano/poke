import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeachPokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }

  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  } 
  getPokemonid(name: Number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

}
