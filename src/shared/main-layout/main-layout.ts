
import {
  AfterViewInit,
  Component,
  DestroyRef,
  HostListener,
  inject,
  Inject,
  PLATFORM_ID
} from '@angular/core';

import { isPlatformBrowser } from '@angular/common';

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
  private readonly platformId = inject(PLATFORM_ID);

  ngAfterViewInit(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

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
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    this.scrollToHashAfterRender();
  }

  private scrollToHashAfterRender(): void {
    if (!isPlatformBrowser(this.platformId)) {
      return;
    }

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        this.sectionScroll.scrollToCurrentHash();
      });
    });
  }
}
