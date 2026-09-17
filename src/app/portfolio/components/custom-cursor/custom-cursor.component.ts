import { Component, OnInit, OnDestroy, Inject, PLATFORM_ID, NgZone, ChangeDetectionStrategy, signal } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';

@Component({
  selector: 'app-custom-cursor',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './custom-cursor.component.html',
  styleUrl: './custom-cursor.component.css',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class CustomCursorComponent implements OnInit, OnDestroy {
  protected isHovered = signal<boolean>(false);
  protected isClicked = signal<boolean>(false);
  protected isVisible = signal<boolean>(false);

  private targetX = 0;
  private targetY = 0;
  private currentX = 0;
  private currentY = 0;
  private dotX = 0;
  private dotY = 0;

  private animFrameId: number | null = null;
  private isBrowser: boolean;

  private onMouseMove = (e: MouseEvent) => {
    this.targetX = e.clientX;
    this.targetY = e.clientY;
    this.dotX = e.clientX;
    this.dotY = e.clientY;

    if (!this.isVisible()) {
      this.isVisible.set(true);
    }

    const target = e.target as HTMLElement | null;
    if (target) {
      const isInteractive = !!target.closest(
        'a, button, input, textarea, select, [role="button"], .clickable, .hover-lift, button-glow, [tabindex]:not([tabindex="-1"])'
      );
      if (this.isHovered() !== isInteractive) {
        this.ngZone.run(() => this.isHovered.set(isInteractive));
      }
    }
  };

  private onMouseDown = () => {
    this.ngZone.run(() => this.isClicked.set(true));
  };

  private onMouseUp = () => {
    this.ngZone.run(() => this.isClicked.set(false));
  };

  private onMouseLeave = () => {
    this.ngZone.run(() => this.isVisible.set(false));
  };

  private onMouseEnter = () => {
    this.ngZone.run(() => this.isVisible.set(true));
  };

  constructor(
    @Inject(PLATFORM_ID) platformId: object,
    private ngZone: NgZone
  ) {
    this.isBrowser = isPlatformBrowser(platformId);
  }

  ngOnInit(): void {
    if (!this.isBrowser) return;

    if (window.matchMedia('(pointer: coarse)').matches) {
      return;
    }

    this.ngZone.runOutsideAngular(() => {
      window.addEventListener('mousemove', this.onMouseMove, { passive: true });
      window.addEventListener('mousedown', this.onMouseDown, { passive: true });
      window.addEventListener('mouseup', this.onMouseUp, { passive: true });
      document.addEventListener('mouseleave', this.onMouseLeave, { passive: true });
      document.addEventListener('mouseenter', this.onMouseEnter, { passive: true });

      this.renderLoop();
    });
  }

  ngOnDestroy(): void {
    if (!this.isBrowser) return;

    window.removeEventListener('mousemove', this.onMouseMove);
    window.removeEventListener('mousedown', this.onMouseDown);
    window.removeEventListener('mouseup', this.onMouseUp);
    document.removeEventListener('mouseleave', this.onMouseLeave);
    document.removeEventListener('mouseenter', this.onMouseEnter);

    if (this.animFrameId !== null) {
      cancelAnimationFrame(this.animFrameId);
    }
  }

  private renderLoop = () => {
    const ease = 0.18;
    this.currentX += (this.targetX - this.currentX) * ease;
    this.currentY += (this.targetY - this.currentY) * ease;

    const ringEl = document.getElementById('custom-cursor-ring');
    const dotEl = document.getElementById('custom-cursor-dot');

    if (ringEl) {
      ringEl.style.transform = `translate3d(${this.currentX}px, ${this.currentY}px, 0) translate(-50%, -50%)`;
    }

    if (dotEl) {
      dotEl.style.transform = `translate3d(${this.dotX}px, ${this.dotY}px, 0) translate(-50%, -50%)`;
    }

    this.animFrameId = requestAnimationFrame(this.renderLoop);
  };
}
