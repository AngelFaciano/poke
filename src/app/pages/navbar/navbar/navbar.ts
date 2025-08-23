import { Component } from '@angular/core';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [NgOptimizedImage], 
  templateUrl: './navbar.html',
  styleUrls: ['./navbar.css']
})
export class Navbar {
  logoUrl = '/icons/baner-Photoroom.png'; 
}
