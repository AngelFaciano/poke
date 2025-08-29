import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { PokeService } from '../../service/poke.service';
import { SeachPokeService } from '../../service/seachPoke.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-infopoke',
  imports: [],
  templateUrl: './infopoke.component.html',
  styleUrl: './infopoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfopokeComponent {
  data = signal<any | null>(null);
  p: number[] = [0, 0, 0, 0, 0, 0];
  j:string=""
  constructor(private poke: SeachPokeService) {
    // efecto reactivo
    effect(async () => {
      const pokeData = await this.poke.getPokemonId(150);
      this.data.set(pokeData);
      this.j=this.data().sprites.other["official-artwork"].front_default
      for(let i of [0,1,2,3,4,5])
      this.p[i]=this.data().stats[i].base_stat
    });
  }
}
