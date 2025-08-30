import { Component, inject, signal, effect } from '@angular/core';
import { NgOptimizedImage, CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage, CommonModule],
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  logoUrl = '/icons/baner-Photoroom.png'; 

  private http = inject(HttpClient);

  // estado reactivo
  pokemonName = signal('pikachu');
  data = signal<any | null>(null);

  constructor() {
    // cada vez que cambie `pokemonName` se dispara este efecto
    effect(() => {
      const name = this.pokemonName();
      if (!name) {
        this.data.set(null);
        return;
      }

      this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
        .subscribe({
          next: res => this.data.set(res),
          error: () => this.data.set(null)
        });
    });

  }
  search(event: string) {
  const input = event
  this.pokemonName.set(input);
}
}
