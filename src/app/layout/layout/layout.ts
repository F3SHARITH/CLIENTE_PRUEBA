import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header';
import { SidebarComponent } from "../sidebar/sidebar";

@Component({
  selector: 'app-layout',
  imports: [HeaderComponent, SidebarComponent],
  templateUrl: './layout.html',
  styleUrl: './layout.css',
})
export class LayoutComponent {}