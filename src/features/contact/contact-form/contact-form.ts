
import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ElementRef,
  OnDestroy,
  ViewChild,
  inject
} from '@angular/core';

import {
  AbstractControl,
  FormBuilder,
  ReactiveFormsModule,
  ValidationErrors,
  ValidatorFn,
  Validators
} from '@angular/forms';

import { MailService } from '../mail-service/mail-service';
import { TitleDivider } from '../../../shared/title-divider/title-divider';

/**
 * Rejects empty values and strings containing only whitespace.
 */
const nonWhitespaceValidator: ValidatorFn = (
  control: AbstractControl
): ValidationErrors | null => {
  const value: unknown = control.value;

  if (typeof value !== 'string') {
    return { whitespace: true };
  }

  return value.trim().length > 0
    ? null
    : { whitespace: true };
};

/**
 * Validates the trimmed length of a string.
 *
 * Leading and trailing spaces do not count towards
 * the minimum or maximum length.
 */
const trimmedLengthValidator = (
  min: number,
  max: number
): ValidatorFn => {
  return (control: AbstractControl): ValidationErrors | null => {
    const value: unknown = control.value;

    if (typeof value !== 'string') {
      return null;
    }

    const length = value.trim().length;

    if (length < min) {
      return {
        minlength: {
          requiredLength: min,
          actualLength: length
        }
      };
    }

    if (length > max) {
      return {
        maxlength: {
          requiredLength: max,
          actualLength: length
        }
      };
    }

    return null;
  };
};

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TitleDivider],
  styleUrl: './contact-form.css',
  templateUrl: './contact-form.html'
})
export class ContactForm implements AfterViewInit, OnDestroy {

  @ViewChild('contactFormSection')
  contactFormSection!: ElementRef<HTMLElement>;

  isContactFormVisible = false;

  private observer?: IntersectionObserver;

  private readonly fb = inject(FormBuilder);
  private readonly mailService = inject(MailService);
  private readonly cdr = inject(ChangeDetectorRef);

  /**
   * Tracks whether the user has attempted to submit the form.
   */
  submitted = false;

  /**
   * Reactive form with validation.
   */
  contactForm = this.fb.nonNullable.group({

    name: [
      '',
      [
        Validators.required,
        nonWhitespaceValidator,
        trimmedLengthValidator(2, 100)
      ]
    ],

    email: [
      '',
      [
        Validators.required,
        Validators.email
      ]
    ],

    message: [
      '',
      [
        Validators.required,
        nonWhitespaceValidator,
        Validators.minLength(10)
      ]
    ],

    consent: [
      false,
      [
        Validators.requiredTrue
      ]
    ]

  });

  /**
   * Indicates whether the email is currently being sent.
   */
  isSending = false;

  successMessage = '';
  errorMessage = '';

  /**
   * Determines whether a validation error should be displayed.
   */
  shouldShowError(
    controlName: 'name' | 'email' | 'message' | 'consent'
  ): boolean {
    const control = this.contactForm.controls[controlName];

    return control.invalid &&
      (control.touched || this.submitted);
  }

  /**
   * Moves keyboard focus to the error summary after
   * an invalid submission.
   */
  private focusErrorSummary(): void {
    requestAnimationFrame(() => {
      const errorSummary = document.getElementById(
        'form-error-summary'
      );

      errorSummary?.focus();
    });
  }

  /**
   * Reveals the contact form when it enters the viewport.
   */
  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.isContactFormVisible = true;
        this.cdr.detectChanges();

        this.observer?.disconnect();
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(
      this.contactFormSection.nativeElement
    );
  }

  /**
   * Disconnects the observer when the component is destroyed.
   */
  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  /**
   * Validates and submits the contact form.
   */
  async onSubmit(): Promise<void> {

    // Prevent duplicate submissions immediately.
    if (this.isSending) {
      return;
    }

    // Clear messages from the previous attempt.
    this.successMessage = '';
    this.errorMessage = '';

    // Record this submission attempt.
    this.submitted = true;

    // Stop if any field is invalid.
    if (this.contactForm.invalid) {
      this.contactForm.markAllAsTouched();
      this.focusErrorSummary();
      return;
    }

    // Lock submission before starting the request.
    this.isSending = true;

    try {
      const formValue = this.contactForm.getRawValue();
      const formData = new FormData();

      // Remove surrounding whitespace from text fields.
      formData.append('name', formValue.name.trim());
      formData.append('email', formValue.email.trim());
      formData.append('message', formValue.message.trim());

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

        this.submitted = false;

      } else {
        this.errorMessage =
          result.message || 'Nie udało się wysłać wiadomości.';
      }

    } catch (error) {
      console.error('Contact form error:', error);

      this.errorMessage =
        'Wystąpił błąd podczas wysyłania wiadomości. Spróbuj ponownie później.';

    } finally {
      // Always unlock submission, even if an error occurs.
      this.isSending = false;
    }
  }
}
