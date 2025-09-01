import { ChangeDetectionStrategy, Component, Input, Signal } from '@angular/core';

@Component({
  selector: 'app-name-poke',
  imports: [],
  templateUrl: './namePoke.component.html',
  styleUrl: './namePoke.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NamePokeComponent {
  @Input() pokemon!: Signal<any | null>;

  get imgUrl(): string {
    return this.pokemon().sprites?.other['official-artwork'].front_default ?? '';
  }
 }
