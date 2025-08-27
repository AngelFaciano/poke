import { ChangeDetectionStrategy, Component } from '@angular/core';
import { Pokemon } from '../../interface/pokemon';

@Component({
  selector: 'app-infopoke',
  imports: [],
  templateUrl: './infopoke.component.html',
  styleUrl: './infopoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})

export class InfopokeComponent {
  pokemon: Pokemon = {
  id: 25,
  name: 'pikachu',
  height: 4,
  weight: 60,
  base_experience: 112,
  sprites: {
    front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/25.png',
    other: {
      'official-artwork': {
        front_default: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png'
      }
    }
  },
  types: [ { type: { name: 'electric' } } ],
  abilities: [ { ability: { name: 'static' } } ],
  moves: [ { move: { name: 'quick-attack' } } ],
  stats: [ { base_stat: 55, stat: { name: 'attack' } } ]
};
}
