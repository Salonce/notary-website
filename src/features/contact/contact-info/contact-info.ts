import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { SectionDivider } from '../../../shared/section-divider/section-divider';

@Component({
  imports: [SectionDivider],
  selector: 'app-contact-info',
  styleUrl: './contact-info.css',
  templateUrl: './contact-info.html',
})
export class ContactInfo implements AfterViewInit, OnDestroy {

  @ViewChild('contactInfoSection')
  contactInfoSection!: ElementRef<HTMLElement>;

  isContactInfoVisible = false;

  private observer?: IntersectionObserver;

  constructor(private cdr: ChangeDetectorRef) {}

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          this.isContactInfoVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.contactInfoSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}