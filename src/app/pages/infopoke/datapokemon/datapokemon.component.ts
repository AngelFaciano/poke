import { ChangeDetectionStrategy, Component, effect, Input, signal, Signal } from '@angular/core';
import { DamagepokeService } from '../../../service/damagepoke.service';

@Component({
  selector: 'app-datapokemon',
  imports: [],
  templateUrl: './datapokemon.component.html',
  styleUrl: './datapokemon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DatapokemonComponent {
  @Input() pokemon!: Signal<any | null>;
  pokedame = signal<any | null>(null);
  urlpoke=""
  resistencia= signal<string[]>([]);
  debilidadpoke= signal<string[]>([]);
  showPopup= signal(false);

  constructor(private dame : DamagepokeService){
    effect(()=>{
      this.getsta()
    })

  }
  async getsta() {
    for (let poke of this.pokemon().types) {
      this.urlpoke = poke.type.url;
      const poketipos = await this.dame.llamar(this.urlpoke);
      this.pokedame.set(poketipos);

      for (let l of this.pokedame().damage_relations.double_damage_from) {
        if (!this.debilidadpoke().includes(l.name)) {
          this.debilidadpoke.set([...this.debilidadpoke(), l.name]); // agregamos al final
        } else {
          this.debilidadpoke.set(this.debilidadpoke().filter((t) => t !== l.name));
          this.debilidadpoke.set([...this.debilidadpoke(), l.name + ' *4']);
        }
      }
      for (let l of this.pokedame().damage_relations.double_damage_to) {
        if (!this.resistencia().includes(l.name)) {
          this.resistencia.set([...this.resistencia(), l.name]); // agregamos al final
        } else {
          this.resistencia.set(this.resistencia().filter((t) => t !== l.name));
          this.resistencia.set([...this.resistencia(), l.name + ' *4']);
        }
      }

    }
  }
}
