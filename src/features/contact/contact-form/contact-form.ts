import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MailService } from '../mail-service/mail-service';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule],
  styleUrl: './contact-form.css',
  templateUrl: './contact-form.html',
})
export class ContactForm {

  private readonly fb = inject(FormBuilder);
  private readonly mailService = inject(MailService);

  contactForm = this.fb.nonNullable.group({
    name: ['', [
      Validators.required,
      Validators.minLength(2)
    ]],

    email: ['', [
      Validators.required,
      Validators.email
    ]],

    message: ['', [
      Validators.required,
      Validators.minLength(10)
    ]],

    consent: [false, [
      Validators.requiredTrue
    ]]
  });

  isSending = false;
  successMessage = '';
  errorMessage = '';

  async onSubmit(): Promise<void> {

    this.successMessage = '';
    this.errorMessage = '';

    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      return;
    }

    this.isSending = true;

    const formValue = this.contactForm.getRawValue();

    const formData = new FormData();

    formData.append('name', formValue.name);
    formData.append('email', formValue.email);
    formData.append('message', formValue.message);

    try {
      const result = await this.mailService.sendEmail(formData);

      if (result.success) {
        this.successMessage =
          'Dziękujemy. Wiadomość została wysłana pomyślnie.';

        this.contactForm.reset({
          name: '',
          email: '',
          message: '',
          consent: false
        });

      } else {
        this.errorMessage =
          result.message || 'Nie udało się wysłać wiadomości.';
      }

    } catch (error) {
      console.error('Contact form error:', error);

      this.errorMessage =
        'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.';
    } finally {
      this.isSending = false;
    }
  }
}