import { Component, Input, Output, EventEmitter, OnInit, OnDestroy, PLATFORM_ID, inject, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { PersonalDetails } from '../../portfolio.data';
import { EmailService } from '../../services/email.service';

@Component({
  selector: 'app-portfolio-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="hero" class="relative pt-28 pb-10 md:pt-36 md:pb-14 overflow-hidden bg-[var(--bg-primary)] text-[var(--text-primary)]">
      <div class="absolute top-1/4 left-1/3 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[var(--primary)] opacity-15 rounded-full blur-[140px] pointer-events-none"></div>
      <div class="absolute top-1/3 right-10 w-[450px] h-[450px] bg-[var(--secondary)] opacity-15 rounded-full blur-[130px] pointer-events-none"></div>
      <div class="absolute bottom-10 left-10 w-[400px] h-[400px] bg-[var(--accent)] opacity-15 rounded-full blur-[120px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          <div class="lg:col-span-7 space-y-6 text-center lg:text-left" data-aos="fade-right">
            
            <div class="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-active)] text-xs sm:text-sm font-semibold shadow-lg shadow-[var(--glow-color)]">
              <span class="relative flex h-2.5 w-2.5">
                <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-[var(--primary)] opacity-75"></span>
                <span class="relative inline-flex rounded-full h-2.5 w-2.5 bg-[var(--primary)]"></span>
              </span>
              <span class="text-gradient">Available for Opportunities</span>
            </div>

            <div class="space-y-2">
              <h1 class="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-[var(--text-primary)]">
                Hi, I'm <span class="text-gradient">{{ personal.name }}</span>
              </h1>
              <h2 class="text-base sm:text-lg lg:text-xl font-bold text-[var(--text-secondary)] flex items-center justify-center lg:justify-start gap-2 min-h-[32px]">
                <span>I'm a</span>
                <span class="text-gradient font-extrabold">{{ displayText() }}</span>
                <span class="animate-pulse text-[var(--primary)] font-mono font-normal">|</span>
              </h2>
            </div>

            <p class="text-[var(--text-secondary)] text-base sm:text-lg max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              {{ personal.tagline }}
            </p>

            <div class="flex items-center justify-center lg:justify-start gap-2 text-xs font-mono text-[var(--text-muted)]">
              <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/>
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/>
              </svg>
              <span>Based in {{ personal.location }}</span>
              <span class="opacity-40">•</span>
              <span class="text-[var(--primary)] font-bold">2 Years Angular Experience</span>
            </div>

            <div class="flex flex-wrap items-center justify-center lg:justify-start gap-4 pt-2">
              <button
                (click)="scrollTo('projects')"
                class="px-7 py-3.5 rounded-xl font-semibold text-white gradient-btn shadow-xl shadow-[var(--glow-color)] hover:shadow-cyan-500/40 hover:-translate-y-0.5 active:translate-y-0 transition-all cursor-pointer flex items-center gap-2 border border-white/10"
              >
                <span>View My Work</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"/>
                </svg>
              </button>

              <button
                (click)="scrollTo('contact')"
                class="px-7 py-3.5 rounded-xl font-semibold text-[var(--text-primary)] bg-[var(--bg-secondary)] hover:bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-active)] hover:-translate-y-0.5 transition-all flex items-center gap-2 shadow-md cursor-pointer"
              >
                <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"/>
                </svg>
                <span>Contact Me</span>
              </button>
            </div>

            <div class="pt-6 border-t border-[var(--border-color)] flex flex-wrap items-center justify-center lg:justify-start gap-6">
              <span class="text-xs uppercase tracking-wider text-[var(--text-muted)] font-mono font-semibold">Connect With Me:</span>
              <div class="flex items-center gap-4">
                <button (click)="openSmsModal()" aria-label="Text Message" class="p-2.5 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-blue-500 hover:bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-active)] transition-all shadow-md cursor-pointer">
                  <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                  </svg>
                </button>
                <a [href]="personal.linkedin" target="_blank" rel="noopener" aria-label="LinkedIn" class="p-2.5 rounded-xl bg-[var(--bg-secondary)] text-[var(--text-muted)] hover:text-[var(--primary)] hover:bg-[var(--bg-surface)] border border-[var(--border-color)] hover:border-[var(--border-active)] transition-all shadow-md">
                  <svg class="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
                  </svg>
                </a>
              </div>
            </div>

          </div>

          <div class="lg:col-span-5 flex justify-center py-6 lg:py-0" data-aos="fade-left" data-aos-delay="200">
            <div class="relative w-72 h-72 sm:w-88 sm:h-88 lg:w-[360px] lg:h-[360px] flex items-center justify-center">
              
              <div class="absolute -inset-5 sm:-inset-7 rounded-full border-2 border-dashed border-[var(--primary)] opacity-50 pointer-events-none animate-orbit-spin"></div>

              <div class="absolute -inset-2 sm:-inset-4 rounded-full gradient-hero opacity-20 blur-2xl pointer-events-none"></div>

              <div class="w-full h-full rounded-full overflow-hidden border-4 border-[var(--border-active)] shadow-2xl shadow-[var(--glow-color)] relative group bg-[var(--bg-card)] flex items-center justify-center">
                <img
                  src="profile-photo.jpg"
                  alt="Aniket Agale - Software Developer"
                  class="w-full h-full object-cover object-top group-hover:scale-105 transition-transform duration-700"
                  (error)="onImageError($event)"
                />

                <div class="hidden image-fallback flex-col items-center justify-center text-center p-4">
                  <div class="w-24 h-24 rounded-full gradient-btn flex items-center justify-center font-mono font-bold text-3xl text-white">
                    AA
                  </div>
                  <span class="text-sm font-semibold text-[var(--text-primary)] mt-3 font-mono">Aniket Agale</span>
                  <span class="text-xs text-[var(--primary)] font-mono">Angular Developer</span>
                </div>
              </div>

              
              <div class="absolute top-4 left-4 sm:top-6 sm:left-6 lg:top-8 lg:left-8 z-20 animate-float-1 -translate-x-1/2 -translate-y-1/2">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-red-500 animate-pulse"></span>
                  <span>Angular</span>
                </div>
              </div>

              <div class="absolute top-1/2 -left-8 sm:-left-10 lg:-left-12 -translate-y-1/2 -translate-x-1/2 z-20 animate-float-2">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-500"></span>
                  <span>Python</span>
                </div>
              </div>

              <div class="absolute top-4 right-4 sm:top-6 sm:right-6 lg:top-8 lg:right-8 z-20 animate-float-2 translate-x-1/2 -translate-y-1/2">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-cyan-400"></span>
                  <span>React</span>
                </div>
              </div>

              <div class="absolute top-1/2 -right-8 sm:-right-10 lg:-right-12 -translate-y-1/2 translate-x-1/2 z-20 animate-float-3">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-green-500"></span>
                  <span>Node.js</span>
                </div>
              </div>

              <div class="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 lg:bottom-8 lg:right-8 z-20 animate-float-4 translate-x-1/2 translate-y-1/2">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-blue-400"></span>
                  <span>TypeScript</span>
                </div>
              </div>

              <div class="absolute bottom-4 left-4 sm:bottom-6 sm:left-6 lg:bottom-8 lg:left-8 z-20 animate-float-5 -translate-x-1/2 translate-y-1/2">
                <div class="px-3.5 py-1.5 sm:px-4 sm:py-2 rounded-full bg-[var(--bg-card)] text-[var(--text-primary)] font-bold text-xs sm:text-sm shadow-xl shadow-[var(--glow-color)] border border-[var(--border-active)] flex items-center gap-2 backdrop-blur-md">
                  <span class="w-2.5 h-2.5 rounded-full bg-yellow-400"></span>
                  <span>JavaScript</span>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>

    @if (isSmsModalOpen()) {
        <div class="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
          <div class="bg-[var(--bg-card)] border border-[var(--border-color)] rounded-2xl shadow-2xl w-full max-w-md overflow-hidden animate-slideUp">
            
            <div class="px-6 py-4 border-b border-[var(--border-color)] flex items-center justify-between bg-[var(--bg-surface)]">
              <h3 class="text-lg font-bold text-[var(--text-primary)] flex items-center gap-2">
                <svg class="w-5 h-5 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"/>
                </svg>
                Send a Message
              </h3>
              <button (click)="closeSmsModal()" class="text-[var(--text-muted)] hover:text-red-500 transition-colors">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
                </svg>
              </button>
            </div>

            <div class="p-6 space-y-4">
              <p class="text-sm text-[var(--text-secondary)] leading-relaxed">
                Type your message below. This will open your default SMS application to send the text directly to my number.
              </p>
              <textarea 
                #smsInput
                rows="4" 
                placeholder="Hi Aniket, I'm reaching out regarding..."
                class="w-full px-4 py-3 bg-[var(--bg-primary)] border border-[var(--border-active)] rounded-xl text-[var(--text-primary)] placeholder-[var(--text-muted)] focus:outline-none focus:ring-2 focus:ring-blue-500/50 resize-none transition-all shadow-inner"
              ></textarea>
            </div>

            <div class="px-6 py-4 bg-[var(--bg-surface)] border-t border-[var(--border-color)] flex justify-end gap-3">
              <button 
                (click)="closeSmsModal()" 
                class="px-5 py-2.5 rounded-xl font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] transition-all"
              >
                Cancel
              </button>
              <button 
                (click)="sendSms(smsInput.value); smsInput.value = ''" 
                class="px-5 py-2.5 rounded-xl font-bold text-white bg-blue-600 hover:bg-blue-700 shadow-lg shadow-blue-500/30 transition-all flex items-center gap-2"
              >
                <span>Send Message</span>
                <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M14 5l7 7m0 0l-7 7m7-7H3"/>
                </svg>
              </button>
            </div>

          </div>
        </div>
      }

    @if (showToast()) {
      <div class="fixed bottom-10 left-1/2 -translate-x-1/2 z-[200] px-6 py-3 font-bold text-white rounded-full shadow-2xl flex items-center gap-2 transition-all animate-bounce"
           [ngClass]="toastType() === 'success' ? 'bg-green-500 shadow-green-500/40' : 'bg-red-500 shadow-red-500/40'">
        
        @if (toastType() === 'success') {
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M5 13l4 4L19 7"></path></svg>
        } @else {
          <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="3" d="M6 18L18 6M6 6l12 12"></path></svg>
        }
        
        <span>{{ toastMessage() }}</span>
      </div>
    }
  `
})
export class HeroComponent implements OnInit, OnDestroy {
  @Input({ required: true }) personal!: PersonalDetails;
  @Output() navigate = new EventEmitter<string>();

  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);
  private emailService = inject(EmailService);

  roles: string[] = [
    'Frontend Developer',
    'Angular Developer',
    'Problem Solver',
    'TypeScript Enthusiast',
    'UI Engineer',
    'Open Source Learner'
  ];

  currentRoleIndex = 0;
  displayText = signal<string>('');
  isDeleting = false;
  private timerId: any = null;

  ngOnInit() {
    if (this.isBrowser) {
      this.typeRole();
    } else {
      this.displayText.set('Frontend Developer');
    }
  }

  ngOnDestroy() {
    if (this.timerId) {
      clearTimeout(this.timerId);
    }
  }

  private typeRole() {
    const currentFullRole = this.roles[this.currentRoleIndex];
    
    if (this.isDeleting) {
      this.displayText.set(currentFullRole.substring(0, this.displayText().length - 1));
    } else {
      this.displayText.set(currentFullRole.substring(0, this.displayText().length + 1));
    }

    let speed = this.isDeleting ? 40 : 90;

    if (!this.isDeleting && this.displayText() === currentFullRole) {
      speed = 1800; // Pause at full word
      this.isDeleting = true;
    } else if (this.isDeleting && this.displayText() === '') {
      this.isDeleting = false;
      this.currentRoleIndex = (this.currentRoleIndex + 1) % this.roles.length;
      speed = 300; // Pause before typing next word
    }

    this.timerId = setTimeout(() => this.typeRole(), speed);
  }

  scrollTo(id: string) {
    this.navigate.emit(id);
  }

  onImageError(event: Event) {
    const target = event.target as HTMLElement;
    target.style.display = 'none';
    const fallback = target.nextElementSibling as HTMLElement;
    if (fallback) {
      fallback.classList.remove('hidden');
      fallback.classList.add('flex');
    }
  }

  isSmsModalOpen = signal<boolean>(false);

  openSmsModal() {
    this.isSmsModalOpen.set(true);
  }

  closeSmsModal() {
    this.isSmsModalOpen.set(false);
  }

  showToast = signal<boolean>(false);
  toastMessage = signal<string>('');
  toastType = signal<'success'|'error'>('success');
  private toastTimer: any;

  displayToast(message: string, type: 'success'|'error') {
    this.toastMessage.set(message);
    this.toastType.set(type);
    this.showToast.set(true);
    
    if (this.toastTimer) clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      this.showToast.set(false);
    }, 3000);
  }

  async sendSms(message: string) {
    if (!message.trim()) return;
    
    const success = await this.emailService.sendEmail(message);
    
    if (success) {
      this.displayToast('Message sent successfully! 🚀', 'success');
    } else {
      this.displayToast('Failed to send message. Please try again.', 'error');
    }
    this.closeSmsModal();
  }
}
