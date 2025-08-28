import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeachPokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  data = signal<any | null>(null);

  constructor(private http: HttpClient) { }

  // Devuelve Observable directamente
  getPokemon(nameOrId: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nameOrId}`);
  }

  // Devuelve un signal que se actualiza automáticamente
  async getPokemonId(id: number) {
    try {
      // Convertimos el Observable a Promise
      const res = await firstValueFrom(
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      );

      // Guardamos el resultado en el signal
      this.data.set(res);

      // Retornamos el valor directamente
      return res;
    } catch (error) {
      console.error('Error cargando Pokémon', error);
      this.data.set(null);
      return null;
    }
  }
}


