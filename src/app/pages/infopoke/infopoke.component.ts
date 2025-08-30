import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { PokeService } from '../../service/poke.service';
import { SeachPokeService } from '../../service/seachPoke.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { DamagepokeService } from '../../service/damagepoke.service';

@Component({
  selector: 'app-infopoke',
  imports: [],
  templateUrl: './infopoke.component.html',
  styleUrl: './infopoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfopokeComponent {
  data = signal<any | null>(null);
  pokedame = signal<any | null>(null);
  p: number[] = [0, 0, 0, 0, 0, 0];
  j: string = ""
  x: string = ""
  d: string = ""
  arr = signal<string[]>([]);
  constructor(private poke: SeachPokeService, private dame: DamagepokeService) {
    // efecto reactivo
    effect(async () => {
      const pokeData = await this.poke.getPokemonId(6);
      this.data.set(pokeData);
      this.j = this.data().sprites.other["official-artwork"].front_default
      this.x = `../../../../public/icons/${this.data().types[0].type.name}.svg`
      for (let poke of this.data().types) {
        this.d = poke.type.url
        const res = await this.dame.llamar(this.d);
        this.pokedame.set(res)
        for (let l of this.pokedame().damage_relations.double_damage_from) {
          if (!this.arr().includes(l.name)) {
            this.arr.set([...this.arr(), l.name]); // agregamos al final
          }else{
            this.arr.set(this.arr().filter(t => t !== l.name));
            this.arr.set([...this.arr(), l.name+" *4"]);

          }
        }


      }
      console.log(this.arr)
      for (let i of [0, 1, 2, 3, 4, 5])
        this.p[i] = this.data().stats[i].base_stat
    });
  }
}
