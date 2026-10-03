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
  FormBuilder,
  ReactiveFormsModule,
  Validators
} from '@angular/forms';

import { MailService } from '../mail-service/mail-service';
import { TitleDivider } from '../../../shared/title-divider/title-divider';

@Component({
  selector: 'app-contact-form',
  imports: [ReactiveFormsModule, TitleDivider],
  styleUrl: './contact-form.css',
  templateUrl: './contact-form.html',
})
export class ContactForm implements AfterViewInit, OnDestroy {

  @ViewChild('contactFormSection')
  contactFormSection!: ElementRef<HTMLElement>;

  isContactFormVisible = false;

  private observer?: IntersectionObserver;

  private readonly fb = inject(FormBuilder);
  private readonly mailService = inject(MailService);
  private readonly cdr = inject(ChangeDetectorRef);

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

  ngAfterViewInit(): void {
    this.observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        this.cdr.detectChanges();

        requestAnimationFrame(() => {
          this.isContactFormVisible = true;
          this.cdr.detectChanges();

          this.observer?.disconnect();
        });
      },
      {
        threshold: 0.15
      }
    );

    this.observer.observe(this.contactFormSection.nativeElement);
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

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