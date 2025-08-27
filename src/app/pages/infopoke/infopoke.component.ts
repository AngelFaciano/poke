import { ChangeDetectionStrategy, Component, effect, signal } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';
import { PokeService } from '../../service/poke.service';
import { SeachPokeService } from '../../service/seachPoke.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-infopoke',
  imports: [],
  templateUrl: './infopoke.component.html',
  styleUrl: './infopoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfopokeComponent {data$!: Observable<any>;
   datas = signal(null);
 constructor(private poke:SeachPokeService){
   

  effect(() => {
      const name = this.poke.getPokemonId(1);
      if (!name) {
        this.datas.set(name);
        return;
      }
    });
      
 }
}
