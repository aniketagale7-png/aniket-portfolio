import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ExperienceItem } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-experience',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="experience" class="pt-8 pb-20 relative bg-[var(--bg-primary)]">
      <div class="max-w-3xl mx-auto px-8 sm:px-12">
        
        <div class="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            Professional Experience
          </h2>
          <p class="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            A timeline of my professional experiences and achievements in software development.
          </p>
        </div>

        <div class="relative">
          <div class="absolute left-[20px] md:left-[40px] top-6 bottom-10 w-[2px] bg-gradient-to-b from-[#6366f1] via-[#0ea5e9] to-[var(--bg-primary)] z-0"></div>

          <div class="space-y-6 md:space-y-8">
            @for (item of experiences; track item.id; let i = $index) {
              <div class="relative pl-[60px] md:pl-[100px]">
                
                <div class="absolute left-0 md:left-[20px] top-4 w-10 h-10 flex items-center justify-center z-10">
                  @if (i === 0) {
                    <div class="absolute w-14 h-14 rounded-full border-2 border-dashed border-[#4f46e5] animate-[spin_8s_linear_infinite]"></div>
                  }
                  <div class="w-8 h-8 bg-[var(--bg-primary)] rounded-full border-2 border-[#6366f1] flex items-center justify-center text-xs font-bold text-[#6366f1]">
                    {{ i + 1 }}
                  </div>
                </div>

                <div data-aos="fade-left" [attr.data-aos-delay]="i * 100 + 100" class="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] rounded-2xl p-6 md:p-8 hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-300 hover:-translate-y-1 relative group">
                  
                  <div class="flex items-center justify-between mb-4">
                    <div class="flex items-center gap-3 text-[10px] md:text-xs font-mono font-medium">
                      @if (item.isCurrent) {
                        <span class="px-2.5 py-1 bg-[#cffafe] dark:bg-cyan-900/30 text-[#0891b2] dark:text-cyan-400 rounded-full flex items-center gap-1.5 uppercase font-bold tracking-wider">
                          <span class="w-1.5 h-1.5 bg-[#06b6d4] rounded-full animate-pulse"></span>
                          CURRENT
                        </span>
                      }
                      <span class="text-[var(--text-muted)] tracking-wide">{{ item.period }}</span>
                    </div>
                    
                    <svg class="w-4 h-4 text-[var(--text-muted)] opacity-50 group-hover:opacity-100 transition-opacity" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                  </div>

                  <h3 class="text-xl md:text-2xl font-bold text-[var(--text-primary)] mb-1">{{ item.role }}</h3>
                  
                  <div class="text-[#6366f1] text-xs md:text-sm font-semibold mb-4 flex items-center gap-1.5">
                    <span class="text-[#6366f1] text-lg leading-none">&bull;</span>
                    {{ item.company }}
                  </div>
                  
                  <div class="space-y-2">
                    @for (desc of item.description; track desc) {
                      <p class="text-[var(--text-secondary)] text-xs md:text-sm leading-relaxed">{{ desc }}</p>
                    }
                  </div>
                </div>

              </div>
            }
          </div>
          
        </div>
      </div>
    </section>
  `
})
export class ExperienceComponent {
  @Input({ required: true }) experiences!: ExperienceItem[];
}
