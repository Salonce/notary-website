import { Service } from '@angular/core';
import { environment } from '../../../environments/environment';

export interface MailResponse {
  success: boolean;
  message: string;
}

@Service()
export class MailService {

  private readonly apiUrl = 'https://api.web3forms.com/submit';

  async sendEmail(formData: FormData): Promise<MailResponse> {

    // Add Web3Forms credentials
    formData.append('access_key', environment.web3formsKey);

    // Email configuration
    formData.append('subject', 'New contact form submission');
    formData.append('from_name', 'Law Firm Website');

    // Simple honeypot for spam protection
    formData.append('botcheck', '');

    try {
      const response = await fetch(this.apiUrl, {
        method: 'POST',
        body: formData
      });

      const result = await response.json();

      if (!response.ok || !result.success) {
        return {
          success: false,
          message: result.message ?? 'Failed to send message.'
        };
      }

      return {
        success: true,
        message: result.message ?? 'Message sent successfully.'
      };

    } catch (error) {
      console.error('Web3Forms error:', error);

      return {
        success: false,
        message: 'Unable to send the message. Please try again later.'
      };
    }
  }
}