import { Injectable, signal, effect, PLATFORM_ID, inject } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';

export type ThemeMode = 'dark' | 'light';

@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private platformId = inject(PLATFORM_ID);
  private isBrowser = isPlatformBrowser(this.platformId);

  mode = signal<ThemeMode>('light');
  isDark = signal<boolean>(false);

  constructor() {
    if (this.isBrowser) {
      this.initSavedTheme();
    }

    effect(() => {
      const currentMode = this.mode();
      if (this.isBrowser) {
        this.applyTheme(currentMode);
      }
    });
  }

  toggleMode() {
    const nextMode = this.mode() === 'dark' ? 'light' : 'dark';
    this.setMode(nextMode);
  }

  setMode(mode: ThemeMode) {
    this.mode.set(mode);
    if (this.isBrowser) {
      localStorage.setItem('portfolio_mode_theme', mode);
    }
  }

  private initSavedTheme() {
    const savedMode = localStorage.getItem('portfolio_mode_theme') as ThemeMode;
    if (savedMode && (savedMode === 'dark' || savedMode === 'light')) {
      this.mode.set(savedMode);
    } else {
      this.mode.set('light');
    }
  }

  private applyTheme(mode: ThemeMode) {
    if (!this.isBrowser) return;

    const root = document.documentElement;
    const isDarkResolved = mode === 'dark';

    this.isDark.set(isDarkResolved);
    root.setAttribute('data-mode', mode);

    if (isDarkResolved) {
      root.classList.add('dark');
      root.classList.remove('light');
    } else {
      root.classList.add('light');
      root.classList.remove('dark');
    }
  }
}
