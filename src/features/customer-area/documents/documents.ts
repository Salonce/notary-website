import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild
} from '@angular/core';

import { TitleDivider } from '../../../shared/title-divider/title-divider';

@Component({
  imports: [TitleDivider],
  selector: 'app-documents',
  styleUrl: './documents.css',
  templateUrl: './documents.html',
})
export class Documents implements AfterViewInit, OnDestroy {

  @ViewChild('documentsSection')
  documentsSection!: ElementRef<HTMLElement>;

  isDocumentsVisible = false;

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
          this.isDocumentsVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.documentsSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }
}