import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject,
  signal
} from '@angular/core';

import { GoogleReviewsService } from './google-reviews-service/google-reviews-service';
import { TitleDivider } from '../../shared/title-divider/title-divider';

@Component({
  selector: 'app-google-reviews',
  imports: [TitleDivider],
  styleUrl: './google-reviews.css',
  templateUrl: './google-reviews.html',
})
export class GoogleReviews implements AfterViewInit, OnDestroy {

  @ViewChild('googleReviewsSection')
  googleReviewsSection!: ElementRef<HTMLElement>;

  isGoogleReviewsVisible = false;

  private observer?: IntersectionObserver;

  private readonly reviewsService = inject(GoogleReviewsService);
  private readonly cdr = inject(ChangeDetectorRef);

  reviews = signal<any[]>([]);

  rating = signal(0);
  totalReviews = signal(0);

  currentIndex = signal(1);

  isAnimating = signal(false);

  isLoading = signal(true);
  error = signal('');

  constructor() {
    this.loadReviews();
  }

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          this.isGoogleReviewsVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.googleReviewsSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private async loadReviews(): Promise<void> {

    try {

      const place = await this.reviewsService.getPlace();

      this.rating.set(place.rating ?? 0);
      this.totalReviews.set(place.userRatingCount ?? 0);

      this.reviews.set(
        (place.reviews ?? [])
          .filter(review => review.rating > 4)
      );

    } catch (error) {

      console.error('Google Reviews error:', error);

      this.error.set(
        'Nie udało się pobrać opinii z Google.'
      );

    } finally {

      this.isLoading.set(false);

    }
  }

  get carouselReviews(): any[] {

    const reviews = this.reviews();

    if (reviews.length <= 1) {
      return reviews;
    }

    return [
      reviews[reviews.length - 1],
      ...reviews,
      reviews[0],
    ];
  }

  previousReview(): void {

    const length = this.reviews().length;

    if (length <= 1 || this.isAnimating()) {
      return;
    }

    this.isAnimating.set(true);

    this.currentIndex.update(index => index - 1);

    setTimeout(() => {

      if (this.currentIndex() === 0) {

        this.isAnimating.set(false);

        this.currentIndex.set(length);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.isAnimating.set(false);
          });
        });

      } else {

        this.isAnimating.set(false);

      }

    }, 520);
  }

  nextReview(): void {

    const length = this.reviews().length;

    if (length <= 1 || this.isAnimating()) {
      return;
    }

    this.isAnimating.set(true);

    this.currentIndex.update(index => index + 1);

    setTimeout(() => {

      if (this.currentIndex() === length + 1) {

        this.isAnimating.set(false);

        this.currentIndex.set(1);

        requestAnimationFrame(() => {
          requestAnimationFrame(() => {
            this.isAnimating.set(false);
          });
        });

      } else {

        this.isAnimating.set(false);

      }

    }, 520);
  }

  selectReview(index: number): void {

    const length = this.reviews().length;

    if (
      length <= 1 ||
      this.isAnimating() ||
      index < 0 ||
      index >= length
    ) {
      return;
    }

    this.isAnimating.set(true);

    this.currentIndex.set(index + 1);

    setTimeout(() => {
      this.isAnimating.set(false);
    }, 520);
  }
}