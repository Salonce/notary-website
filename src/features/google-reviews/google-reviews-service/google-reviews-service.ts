import { Service } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface GoogleReview {
  rating: number;
  text?: {
    text: string;
    languageCode?: string;
  };
  originalText?: {
    text: string;
    languageCode?: string;
  };
  relativePublishTimeDescription?: string;
  publishTime?: string;
  authorAttribution?: {
    displayName?: string;
    uri?: string;
    photoUri?: string;
  };
  googleMapsUri?: string;
}

export interface GooglePlace {
  id: string;
  rating?: number;
  userRatingCount?: number;
  reviews?: GoogleReview[];
  googleMapsUri?: string;
}

@Service()
export class GoogleReviewsService {

  private readonly apiUrl =
    'https://places.googleapis.com/v1/places';

  private readonly placeId =
    'ChIJJ8wK1TJ54kYRshbI-YINbwI';

  async getPlace(): Promise<GooglePlace> {

    const response = await fetch(
      `${this.apiUrl}/${this.placeId}`,
      {
        method: 'GET',
        headers: {
          'X-Goog-Api-Key': environment.googleMapsApiKey,
          'X-Goog-FieldMask':
            'id,rating,userRatingCount,reviews,googleMapsUri'
        }
      }
    );

    if (!response.ok) {
      const error = await response.text();

      console.error(
        'Google Places API error:',
        response.status,
        error
      );

      throw new Error(
        `Google Places API request failed: ${response.status}`
      );
    }

    return await response.json();
  }

  async getReviews(): Promise<GoogleReview[]> {

    const place = await this.getPlace();

    return place.reviews ?? [];
  }
}