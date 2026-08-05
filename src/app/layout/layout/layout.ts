import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {}