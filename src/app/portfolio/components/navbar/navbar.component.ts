import { Component, Input, Output, EventEmitter, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavItem, PersonalDetails } from '../../portfolio.data';
import { ThemeService } from '../../services/theme.service';

@Component({
  selector: 'app-portfolio-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
    <header class="fixed top-0 left-0 right-0 z-50 transition-all duration-300 bg-[var(--bg-nav)] backdrop-blur-xl border-b border-[var(--border-color)] shadow-lg">
      <div class="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 h-20 flex items-center justify-between gap-4">
        
        <a (click)="scrollToSection('hero')" class="cursor-pointer group flex items-center gap-3 shrink-0">
          <div class="whitespace-nowrap">
            <span class="text-lg font-extrabold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
              {{ personal.name }}
            </span>
            <span class="block text-xs font-bold text-[var(--primary)] font-mono tracking-wide">Software Developer</span>
          </div>
        </a>

        <nav class="hidden md:flex flex-1 items-center justify-center gap-1 lg:gap-2">
          @for (item of navItems; track item.id) {
            <button
              (click)="scrollToSection(item.id)"
              [class.bg-[var(--primary)]]="activeSection() === item.id"
              [class.text-white]="activeSection() === item.id"
              [class.shadow-md]="activeSection() === item.id"
              [class.shadow-[var(--primary)]/30]="activeSection() === item.id"
              [class.text-[var(--text-secondary)]]="activeSection() !== item.id"
              [class.hover:text-[var(--text-primary)]]="activeSection() !== item.id"
              [class.hover:bg-[var(--bg-surface)]]="activeSection() !== item.id"
              class="px-4 py-2 text-sm font-bold rounded-xl transition-all duration-300 cursor-pointer"
            >
              {{ item.label }}
            </button>
          }
        </nav>

        <div class="flex items-center gap-3 shrink-0">
          
          <button
            (click)="themeService.toggleMode()"
            aria-label="Toggle Dark / Light Mode"
            title="Switch Dark / Light Mode"
            class="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-[var(--bg-surface)] hover:bg-[var(--bg-secondary)] border border-[var(--border-color)] hover:border-[var(--primary)] text-[var(--text-primary)] flex items-center justify-center transition-all cursor-pointer shadow-md hover:scale-105 group"
          >
            @if (themeService.isDark()) {
              <svg class="w-5 h-5 text-amber-400 group-hover:rotate-45 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/>
              </svg>
            } @else {
              <svg class="w-5 h-5 text-indigo-600 group-hover:-rotate-12 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/>
              </svg>
            }
          </button>

          <div class="hidden sm:flex items-center">
            <a
              [href]="personal.resumeUrl"
              download
              class="relative inline-flex items-center justify-center px-4 py-2.5 text-xs sm:text-sm font-bold text-white transition-all duration-300 gradient-btn rounded-xl shadow-lg shadow-[var(--glow-color)] hover:scale-105 active:scale-95 group overflow-hidden border border-white/10 whitespace-nowrap"
            >
              <svg class="w-4 h-4 mr-1.5 transition-transform group-hover:-translate-y-0.5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </a>
          </div>

          <button
            (click)="toggleMobileMenu()"
            aria-label="Toggle Navigation Menu"
            class="md:hidden p-2.5 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-color)] text-[var(--text-primary)] hover:text-[var(--primary)] focus:outline-none"
          >
            @if (isMobileMenuOpen()) {
              <svg class="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/>
              </svg>
            } @else {
              <svg class="w-6 h-6 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/>
              </svg>
            }
          </button>
        </div>

      </div>

      @if (isMobileMenuOpen()) {
        <div class="md:hidden bg-[var(--bg-card)] border-b border-[var(--border-color)] px-4 pt-3 pb-6 space-y-4 backdrop-blur-2xl animate-fadeIn">
          
          <div class="p-3 rounded-2xl bg-[var(--bg-surface)] border border-[var(--border-color)] flex items-center justify-between">
            <span class="text-xs font-mono font-bold text-[var(--text-primary)] uppercase tracking-wider">Appearance Mode</span>
            <button
              (click)="themeService.toggleMode()"
              class="px-4 py-2 rounded-xl bg-[var(--bg-secondary)] border border-[var(--border-color)] text-xs font-bold text-[var(--text-primary)] flex items-center gap-2 shadow-sm"
            >
              @if (themeService.isDark()) {
                <span>☀️ Switch to Light</span>
              } @else {
                <span>🌙 Switch to Dark</span>
              }
            </button>
          </div>

          <div class="space-y-1">
            @for (item of navItems; track item.id) {
              <button
                (click)="scrollToSection(item.id)"
                [class.text-[var(--primary)]]="activeSection() === item.id"
                [class.bg-[var(--bg-surface)]]="activeSection() === item.id"
                class="w-full text-left px-4 py-2.5 text-base font-semibold text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-surface)] rounded-xl transition-colors cursor-pointer flex items-center justify-between"
              >
                <span>{{ item.label }}</span>
                <svg class="w-4 h-4 text-[var(--primary)] opacity-70" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 5l7 7-7 7"/>
                </svg>
              </button>
            }
          </div>

          <div class="pt-3 border-t border-[var(--border-color)]">
            <a
              [href]="personal.resumeUrl"
              download
              class="w-full inline-flex items-center justify-center px-5 py-3 text-base font-bold text-white gradient-btn rounded-xl shadow-lg"
            >
              <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
              </svg>
              Download Resume
            </a>
          </div>
        </div>
      }
    </header>
  `
})
export class NavbarComponent {
  @Input({ required: true }) navItems!: NavItem[];
  @Input({ required: true }) personal!: PersonalDetails;
  @Input() activeSection = signal<string>('hero');
  @Output() navigate = new EventEmitter<string>();

  themeService = inject(ThemeService);
  isMobileMenuOpen = signal<boolean>(false);

  toggleMobileMenu() {
    this.isMobileMenuOpen.update(v => !v);
  }

  scrollToSection(id: string) {
    this.isMobileMenuOpen.set(false);
    this.navigate.emit(id);
  }
}
