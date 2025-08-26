import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';

  constructor(private http: HttpClient) {}

  // Obtener un Pokémon por nombre o id
  getPokemon(name: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/${name}`);
  }

  // Obtener lista de pokémon
  getPokemonList(offset: number = 0, limit: number = 20): Observable<any> {
    return this.http.get(`${this.apiUrl}?offset=${offset}&limit=${limit}`);
  }
}
