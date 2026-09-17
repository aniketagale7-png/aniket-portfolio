import { Component, Input, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { PersonalDetails } from '../../portfolio.data';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-portfolio-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
    <section id="contact" class="pt-10 pb-16 md:pt-16 md:pb-24 bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch">
          
          <div class="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-8 flex flex-col justify-between shadow-sm" data-aos="fade-right">
            
            <div>
              <h2 class="text-3xl font-extrabold text-[var(--primary)] mb-4">Get In Touch</h2>
              <p class="text-sm text-[var(--text-secondary)] leading-relaxed mb-8">
                I'm currently available for Frontend Developer work and full-time opportunities. Whether you have a question, a project, or just want to say hi — I'll get back to you within 24 hours!
              </p>

              <div class="space-y-4 mb-8">
                
                <div class="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]/50 transition-all duration-300">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">EMAIL</p>
                    <p class="text-sm font-semibold text-[var(--text-primary)]">{{ personal.email }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]/50 transition-all duration-300">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">LOCATION</p>
                    <p class="text-sm font-semibold text-[var(--text-primary)]">{{ personal.location }}</p>
                  </div>
                </div>

                <div class="flex items-center gap-4 p-4 rounded-2xl bg-[var(--bg-primary)] border border-[var(--border-color)] hover:-translate-y-1 hover:shadow-md hover:border-[var(--primary)]/50 transition-all duration-300">
                  <div class="w-10 h-10 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-500 shrink-0">
                    <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
                  </div>
                  <div>
                    <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-0.5">AVAILABILITY</p>
                    <p class="text-sm font-semibold text-[var(--text-primary)]">Open to opportunities</p>
                  </div>
                </div>

              </div>

              <div class="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-cyan-50 border border-cyan-100 text-cyan-800 text-sm font-bold mb-8 w-full">
                <span class="w-2 h-2 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(6,182,212,0.8)] animate-pulse"></span>
                Available for new projects
              </div>
            </div>

            <div>
              <p class="text-[10px] font-bold text-gray-400 uppercase tracking-wider mb-3">FIND ME ON</p>
              <div class="flex gap-2">
                <a [href]="personal.github" target="_blank" class="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-[var(--text-secondary)]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path fill-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clip-rule="evenodd"/></svg>
                </a>
                <a [href]="personal.linkedin" target="_blank" class="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-[var(--text-secondary)]">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24"><path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/></svg>
                </a>
                <a [href]="'mailto:' + personal.email" class="w-10 h-10 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center hover:border-[var(--primary)] hover:text-[var(--primary)] transition-colors text-[var(--text-secondary)]">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 002-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
                </a>
              </div>
            </div>

          </div>

          <div class="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-3xl p-8 shadow-sm flex flex-col justify-between" data-aos="fade-left" data-aos-delay="200">
            
            @if (formSubmitted()) {
              <div class="flex-1 flex flex-col items-center justify-center text-center space-y-4">
                <div class="w-16 h-16 rounded-full bg-green-100 text-green-500 mx-auto flex items-center justify-center font-bold text-3xl">
                  ✓
                </div>
                <h4 class="text-2xl font-bold text-[var(--text-primary)]">Message Sent!</h4>
                <p class="text-sm text-[var(--text-secondary)]">
                  Thank you, {{ formData.name }}. I'll get back to you soon.
                </p>
                <button
                  (click)="resetForm()"
                  class="mt-6 px-6 py-2 rounded-xl text-sm font-semibold bg-[var(--bg-primary)] text-[var(--text-primary)] border border-[var(--border-color)] hover:bg-gray-100 cursor-pointer"
                >
                  Send Another
                </button>
              </div>
            } @else {
              <div class="mb-6 border-b border-[var(--border-color)] pb-4">
                <h3 class="text-2xl font-bold text-[var(--text-primary)] mb-2">Send a Message</h3>
                <p class="text-sm text-[var(--text-secondary)]">Fill out the form below with your project details or inquiries.</p>
              </div>
              <form (ngSubmit)="onSubmit()" class="flex flex-col h-full gap-5">
                
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="contact-name" class="block text-xs font-bold text-[var(--text-primary)]">Full Name *</label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      [(ngModel)]="formData.name"
                      name="name"
                      placeholder="Enter name"
                      class="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors text-sm"
                    />
                  </div>

                  <div class="space-y-1.5">
                    <label for="contact-email" class="block text-xs font-bold text-[var(--text-primary)]">Email Address *</label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      [(ngModel)]="formData.email"
                      name="email"
                      placeholder="Enter email"
                      class="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors text-sm"
                    />
                  </div>
                </div>


                <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                  <div class="space-y-1.5">
                    <label for="contact-phone" class="block text-xs font-bold text-[var(--text-primary)]">Mobile Number *</label>
                    <input
                      id="contact-phone"
                      type="tel"
                      required
                      [(ngModel)]="formData.phone"
                      name="phone"
                      placeholder="Enter mobile number"
                      class="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors text-sm"
                    />
                  </div>
                  <div class="space-y-1.5">
                    <label for="contact-subject" class="block text-xs font-bold text-[var(--text-primary)]">Subject *</label>
                    <input
                      id="contact-subject"
                      type="text"
                      required
                      [(ngModel)]="formData.subject"
                      name="subject"
                      placeholder="Enter subject"
                      class="w-full px-4 py-2.5 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors text-sm"
                    />
                  </div>
                </div>

                <div class="space-y-1.5">
                  <label for="contact-message" class="block text-xs font-bold text-[var(--text-primary)]">Message *</label>
                  <textarea
                    id="contact-message"
                    required
                    rows="3"
                    [(ngModel)]="formData.message"
                    (input)="updateCharCount()"
                    name="message"
                    placeholder="Enter message"
                    class="w-full px-4 py-3 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-colors text-sm resize-none"
                  ></textarea>
                  <p class="text-[10px] text-gray-400 text-left pt-1">
                    Minimum 10 characters. {{ charCount }}/500
                  </p>
                </div>

                <button
                  type="submit"
                  [disabled]="!isFormValid() || isSubmitting()"
                  class="w-full py-3.5 rounded-xl font-bold text-white bg-[var(--primary)] hover:opacity-90 shadow-lg shadow-[var(--primary)]/30 disabled:opacity-50 disabled:shadow-none disabled:cursor-not-allowed transition-all cursor-pointer flex items-center justify-center gap-2 mt-2"
                >
                  @if (isSubmitting()) {
                    <svg class="animate-spin -ml-1 mr-2 h-4 w-4 text-white" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg>
                    <span>Sending...</span>
                  } @else {
                    <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"/></svg>
                    <span>Send Message</span>
                  }
                </button>

              </form>
            }

          </div>

        </div>
      </div>
    </section>
  `
})
export class ContactComponent {
  @Input({ required: true }) personal!: PersonalDetails;
  
  private emailService = inject(EmailService);

  formSubmitted = signal<boolean>(false);
  isSubmitting = signal<boolean>(false);
  formData = {
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  };
  charCount = 0;

  updateCharCount() {
    this.charCount = this.formData.message.length;
    if (this.charCount > 500) {
      this.formData.message = this.formData.message.substring(0, 500);
      this.charCount = 500;
    }
  }

  isFormValid() {
    return this.formData.name && this.formData.email && this.formData.phone && this.formData.subject && this.charCount >= 10;
  }

  async onSubmit() {
    if (this.isFormValid()) {
      this.isSubmitting.set(true);
      
      const success = await this.emailService.sendEmail(
        this.formData.message,
        this.formData.name,
        this.formData.email,
        this.formData.subject,
        this.formData.phone
      );
      
      this.isSubmitting.set(false);
      
      if (success) {
        this.formSubmitted.set(true);
      } else {
        alert('Failed to send message. Please try again later.');
      }
    }
  }

  resetForm() {
    this.formData = { name: '', email: '', phone: '', subject: '', message: '' };
    this.charCount = 0;
    this.formSubmitted.set(false);
  }
}
