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
}