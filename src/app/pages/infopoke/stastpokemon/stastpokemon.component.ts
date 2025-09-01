import { ChangeDetectionStrategy, Component, effect, Input, Signal, signal} from '@angular/core';

interface Stat {
  key: string;
  value: number;
}
@Component({
  selector: 'app-stastpokemon',
  imports: [],
  templateUrl: './stastpokemon.component.html',
  styleUrl: './stastpokemon.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class StastpokemonComponent {
  @Input() pokemon!: Signal<any | null>;
  stats = signal<any | null>(null);


  p:number[]=[221,2,5]
  constructor(){
    effect(()=>{
      this.getStats()
    })
  }


  getStats(){
    const pokestats = this.pokemon().stats;
    let stat: { key: string, value: number }[] = [];

    for(let i in pokestats){
      stat.push({key: pokestats[i].stat.name, value: pokestats[i].base_stat})
    }
    this.stats.set(stat);
    console.log(this.stats())
    console.log("s")

  }

}
