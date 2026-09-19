import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../features/header/header';
import { TopBar } from '../../features/top-bar/top-bar';
import { BottomBar } from '../../features/bottom-bar/bottom-bar';

@Component({
  imports: [Header, TopBar, RouterOutlet, BottomBar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
