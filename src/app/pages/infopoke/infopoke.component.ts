import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { PokeService } from '../../service/poke.service';
import { SeachPokeService } from '../../service/seachPoke.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DamagepokeService } from '../../service/damagepoke.service';
import { NamePokeComponent } from "./namePoke/namePoke.component";
import { StastpokemonComponent } from "./stastpokemon/stastpokemon.component";
import { DatapokemonComponent } from "./datapokemon/datapokemon.component";
import { CardpokeComponent } from "./cardpoke/cardpoke.component";

@Component({
  selector: 'app-infopoke',
  imports: [NamePokeComponent, StastpokemonComponent, DatapokemonComponent, CardpokeComponent],
  templateUrl: './infopoke.component.html',
  styleUrl: './infopoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfopokeComponent {
  data = signal<any | null>(null);
  pokemon = signal<any | null>(null);
  pokedame = signal<any | null>(null);
  p: number[] = [0, 0, 0, 0, 0, 0];
  x: string = ""
  d: string = ""
  arr = signal<string[]>([]);
  constructor(private poke: SeachPokeService, private dame: DamagepokeService) {
    effect(async()=>{
      const pokeData = await this.poke.getPokemonId(57);
      this.pokemon.set(pokeData);
    })
  }
}
