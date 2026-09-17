import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EducationItem } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-education',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="education" class="pt-6 pb-14 md:pt-8 md:pb-18 bg-[var(--bg-primary)] relative text-[var(--text-primary)]">
      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-4" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            Education
          </h2>
          <p class="text-[var(--text-secondary)] text-base sm:text-lg">
            Academic qualifications establishing my software engineering and technical foundation.
          </p>
        </div>

        <div class="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (edu of education; track edu.id; let i = $index) {
            <div data-aos="fade-up" [attr.data-aos-delay]="i * 100" class="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-active)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l9-5-9-5-9 5 9 5z"/>
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0112 20.055a11.952 11.952 0 01-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 rounded-full text-xs font-mono font-semibold bg-[var(--bg-secondary)] text-[var(--primary)] border border-[var(--border-color)]">
                    {{ edu.period }}
                  </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {{ edu.degree }}
                  </h3>
                  <p class="text-sm font-semibold text-[var(--primary)] pt-1 font-mono">
                    {{ edu.institution }}
                  </p>
                  <p class="text-xs text-[var(--text-muted)] pt-0.5 font-mono">
                    {{ edu.location }}
                  </p>
                </div>

                <ul class="space-y-2 pt-2 border-t border-[var(--border-color)]">
                  @for (highlight of edu.highlights; track highlight) {
                    <li class="flex items-start gap-2 text-xs text-[var(--text-secondary)]">
                      <span class="text-[var(--primary)] mt-0.5">•</span>
                      <span class="leading-relaxed">{{ highlight }}</span>
                    </li>
                  }
                </ul>

              </div>

              <div class="pt-4 border-t border-[var(--border-color)] text-[10px] font-mono text-[var(--text-muted)] flex justify-between items-center">
                <span>ACADEMIC DEGREE</span>
                <span class="text-[var(--primary)] font-semibold">VERIFIED</span>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `
})
export class EducationComponent {
  @Input({ required: true }) education!: EducationItem[];
}
