import { JsonPipe } from '@angular/common';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {
  ChangeDetectionStrategy,
  Component,
  effect,
  inject,
  signal,
} from '@angular/core';
import { catchError, firstValueFrom, of } from 'rxjs';

@Component({
  selector: 'app-cardpoke',
  imports: [JsonPipe],
  templateUrl: './cardpoke.component.html',
  styleUrl: './cardpoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardpokeComponent {
  private http = inject(HttpClient);
  cardData=signal<any | null>(null);;

  constructor() {
    effect(async () => {
      const headers = new HttpHeaders({
        'X-Api-Key': 'af021ef8-f4ea-4299-915b-d3af030852b2',
      });
      const pokeData = await this.getPokemonId(headers)
      console.log(pokeData)

      this.cardData.set(pokeData)

    });
  }

  async getPokemonId(headers:HttpHeaders) {
      try {
        const res = await firstValueFrom(
          this.http.get('https://api.pokemontcg.io/v2/cards?q=name:charizard', { headers })
        );
        return res;
        console.log(res)

      } catch (error) {
        console.error('Error cargando Pokémon', error);
        return null;
      }
    }
}
