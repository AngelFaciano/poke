import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeachPokeService {
   private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  data = signal<any | null>(null);

  constructor(private http: HttpClient) {}

  // Devuelve Observable directamente
  getPokemon(nameOrId: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nameOrId}`);
  }

  // Devuelve un signal que se actualiza automáticamente
  getPokemonId(id: number) {
    this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .subscribe({
          next: res => this.data.set(res),
          error: () => this.data.set(null)
        });
        return this.data;
  }
}


