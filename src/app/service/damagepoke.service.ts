import { HttpClient } from '@angular/common/http';
import { Injectable, signal } from '@angular/core';
import { firstValueFrom, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DamagepokeService {  
  data = signal<any | null>(null);
  constructor(private http:HttpClient) { }
  async llamar(url:string) {
      try {
        // Convertimos el Observable a Promise
        const res = await firstValueFrom(
          this.http.get(url)
        );
  
        // Guardamos el resultado en el signal
        this.data.set(res);
  
        // Retornamos el valor directamente
        return res;
      } catch (error) {
        console.error('Error cargando Pokémon', error);
        this.data.set(null);
        return null;
      }
    }

}
