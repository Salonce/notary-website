import { Component } from '@angular/core';
import { TopNavbar } from '../top-navbar/top-navbar';
import { RouterOutlet } from '@angular/router';
import { Header } from '../../features/header/header';
import { TopBar } from '../../features/top-bar/top-bar';

@Component({
  imports: [Header, TopBar, RouterOutlet],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout {}
