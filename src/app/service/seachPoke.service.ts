import { HttpClient } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SeachPokeService {
  private apiUrl = 'https://pokeapi.co/api/v2/pokemon';
  constructor(private http: HttpClient) { }
  getPokemon(nameOrId: string | number): Observable<any> {
    return this.http.get(`${this.apiUrl}/${nameOrId}`);
  }

  async getPokemonId(id: number) {
    try {
      const res = await firstValueFrom(
        this.http.get(`https://pokeapi.co/api/v2/pokemon/${id}`)
      );
      return res;
    } catch (error) {
      console.error('Error cargando Pokémon', error);
      return null;
    }
  }
}


