import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostListener,
  inject,
} from '@angular/core';
import { Router, RouterOutlet, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

import { TopBar } from '../../features/top-bar/top-bar';
import { BottomBar } from '../../features/bottom-bar/bottom-bar';
import { TopNavbar } from '../top-navbar/top-navbar';
import { CopyrightMobile } from '../../features/copyright-mobile/copyright-mobile';
import { SectionScrollService } from '../section-scroll-service/section-scroll-service';
import { HeroSection } from '../../features/hero-section/hero-section';

@Component({
  imports: [
    TopBar,
    RouterOutlet,
    BottomBar,
    TopNavbar,
    CopyrightMobile,
    HeroSection
],
  selector: 'app-main-layout',
  styleUrl: './main-layout.css',
  templateUrl: './main-layout.html',
})
export class MainLayout implements AfterViewInit {
  private readonly router = inject(Router);
  private readonly destroyRef = inject(DestroyRef);
  private readonly sectionScroll = inject(SectionScrollService);

  ngAfterViewInit(): void {
    this.router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        takeUntilDestroyed(this.destroyRef),
      )
      .subscribe(() => {
        this.scrollToHashAfterRender();
      });

    this.scrollToHashAfterRender();
  }

  @HostListener('window:hashchange')
  onHashChange(): void {
    this.scrollToHashAfterRender();
  }

  private scrollToHashAfterRender(): void {
    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.sectionScroll.scrollToCurrentHash();
      });
    });
  }
}