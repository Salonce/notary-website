import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../features/header/header';
import { TopBar } from '../../features/top-bar/top-bar';
import { BottomBar } from '../../features/bottom-bar/bottom-bar';
import { TopNavbar } from '../top-navbar/top-navbar';

@Component({
  imports: [Header, TopBar, RouterOutlet, BottomBar, TopNavbar],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
