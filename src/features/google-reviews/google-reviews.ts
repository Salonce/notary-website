import { Component, inject, signal } from '@angular/core';
import { GoogleReviewsService } from './google-reviews-service/google-reviews-service';

@Component({
  selector: 'app-google-reviews',
  imports: [],
  styleUrl: './google-reviews.css',
  templateUrl: './google-reviews.html',
})
export class GoogleReviews {

  private readonly reviewsService = inject(GoogleReviewsService);

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


  /**
   * Karuzela zawiera:
   *
   * [ostatnia] [1] [2] [3] [4] [5] [pierwsza]
   *
   * Dzięki temu można jechać w nieskończoność.
   */
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