import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, PersonalDetails } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
    <footer class="bg-[var(--bg-primary)] border-t border-[var(--border-color)] text-[var(--text-muted)] pt-16 relative overflow-hidden">
      <div class="absolute bottom-0 right-1/3 w-[500px] h-[500px] bg-[var(--primary)] opacity-5 rounded-full blur-[150px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          
          <div class="lg:col-span-2 space-y-5">
            <h2 class="text-3xl font-black text-transparent bg-clip-text bg-gradient-to-r from-[var(--primary)] to-cyan-500 tracking-tight">{{ personal.name }}</h2>
            <p class="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-widest">{{ personal.title }}</p>
            <p class="text-sm text-[var(--text-secondary)] leading-relaxed max-w-sm">
              I build pixel-perfect, engaging, and accessible digital experiences. Open for new opportunities!
            </p>
          </div>

          <div class="space-y-5">
            <h3 class="text-xs font-black text-[var(--text-primary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-3 inline-block">Navigation</h3>
            <ul class="space-y-2.5">
              @for (item of navItems; track item.id) {
                <li>
                  <button
                    (click)="scrollTo(item.id)"
                    class="text-sm font-semibold text-[var(--text-secondary)] hover:text-[var(--primary)] hover:translate-x-1 transition-all cursor-pointer flex items-center gap-2"
                  >
                    <span class="w-1 h-1 rounded-full bg-[var(--primary)] opacity-0 transition-opacity"></span>
                    {{ item.label }}
                  </button>
                </li>
              }
            </ul>
          </div>

          <div class="space-y-5">
            <h3 class="text-xs font-black text-[var(--text-primary)] uppercase tracking-widest border-b border-[var(--border-color)] pb-3 inline-block">Contact</h3>
            <ul class="space-y-4">
              <li class="flex flex-col">
                <span class="text-[10px] text-[var(--text-muted)] font-mono font-bold uppercase mb-1">Email</span>
                <a [href]="'mailto:' + personal.email" class="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors">
                  {{ personal.email }}
                </a>
              </li>
              <li class="flex flex-col">
                <span class="text-[10px] text-[var(--text-muted)] font-mono font-bold uppercase mb-1">Phone</span>
                <a [href]="'tel:' + personal.phone" class="text-sm font-semibold text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors">
                  {{ personal.phone }}
                </a>
              </li>
            </ul>
          </div>
          
        </div>

        <div class="border-t border-[var(--border-color)] py-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div class="text-[11px] font-mono font-semibold text-[var(--text-muted)]">
            © {{ currentYear }} {{ personal.name }}. All rights reserved.
          </div>
          
          <button
            (click)="scrollTo('hero')"
            class="flex items-center gap-3 text-[11px] font-black tracking-widest text-[var(--text-primary)] hover:text-[var(--primary)] transition-colors cursor-pointer group"
          >
            <span>BACK TO TOP</span>
            <div class="w-10 h-10 rounded-full bg-gradient-to-br from-[var(--primary)] to-cyan-400 text-white shadow-lg shadow-[var(--primary)]/30 flex items-center justify-center group-hover:-translate-y-1.5 group-hover:shadow-[var(--primary)]/50 transition-all duration-300">
              <svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 10l7-7m0 0l7 7m-7-7v18"/>
              </svg>
            </div>
          </button>
        </div>

      </div>
    </footer>
  `
})
export class FooterComponent {
  @Input({ required: true }) navItems!: NavItem[];
  @Input({ required: true }) personal!: PersonalDetails;
  @Output() navigate = new EventEmitter<string>();

  currentYear = new Date().getFullYear();

  scrollTo(id: string) {
    this.navigate.emit(id);
  }
}
