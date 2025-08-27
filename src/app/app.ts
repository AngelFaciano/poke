import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Navbar } from "./pages/navbar/navbar/navbar";
import { InfopokeComponent } from "./pages/infopoke/infopoke.component";

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Navbar, InfopokeComponent],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('pokemon');
}
