import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-portfolio-tech-marquee',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section class="py-8 bg-[var(--bg-primary)] overflow-hidden relative" data-aos="fade-in">
      <div class="absolute left-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-r from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>
      <div class="absolute right-0 top-0 bottom-0 w-16 md:w-32 bg-gradient-to-l from-[var(--bg-primary)] to-transparent z-10 pointer-events-none"></div>

      <div class="flex whitespace-nowrap animate-marquee items-center gap-12 md:gap-20 w-max">
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Angular</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">TypeScript</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Tailwind CSS</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">JavaScript</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Node.js</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">RxJS</span>
        </div>

        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-red-500 shadow-[0_0_8px_rgba(239,68,68,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Angular</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-blue-500 shadow-[0_0_8px_rgba(59,130,246,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">TypeScript</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Tailwind CSS</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-yellow-400 shadow-[0_0_8px_rgba(250,204,21,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">JavaScript</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">Node.js</span>
        </div>
        <div class="flex items-center gap-2">
          <span class="w-3 h-3 rounded-full bg-pink-500 shadow-[0_0_8px_rgba(236,72,153,0.8)]"></span>
          <span class="text-base md:text-lg font-extrabold font-mono text-[var(--text-secondary)] tracking-widest">RxJS</span>
        </div>
      </div>
    </section>
  `,
  styles: [`
    @keyframes marquee {
      0% {
        transform: translateX(0);
      }
      100% {
        transform: translateX(-50%);
      }
    }
    .animate-marquee {
      animation: marquee 25s linear infinite;
    }
    .animate-marquee:hover {
      animation-play-state: paused;
    }
  `]
})
export class TechMarqueeComponent {
}
