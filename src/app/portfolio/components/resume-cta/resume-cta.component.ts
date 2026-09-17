import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetails } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-resume-cta',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="resume" class="py-20 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] gradient-hero opacity-15 blur-[120px] pointer-events-none rounded-full"></div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        <div class="p-8 sm:p-12 rounded-3xl bg-[var(--bg-card)] border border-[var(--border-color)] shadow-2xl shadow-[var(--glow-color)] text-center space-y-6 relative overflow-hidden group" data-aos="zoom-in" data-aos-duration="1000">
          
          <div class="absolute top-0 left-0 right-0 h-1 gradient-btn"></div>

          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[var(--bg-secondary)] border border-[var(--border-active)] text-[var(--primary)] text-xs font-mono font-semibold">
            <svg class="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 01-2-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"/>
            </svg>
            <span>OFFICIAL CURRICULUM VITAE</span>
          </div>

          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[var(--text-primary)] max-w-2xl mx-auto">
            Want to Know More About My Experience?
          </h2>

          <p class="text-[var(--text-secondary)] text-base sm:text-lg max-w-xl mx-auto leading-relaxed">
            Download my resume to explore my detailed technical skills, Angular project responsibilities, and client deliverables at The Baap Company.
          </p>

          <div class="flex flex-wrap items-center justify-center gap-4 pt-2">
            <a
              [href]="personal.resumeUrl"
              download
              class="px-8 py-4 rounded-xl font-bold text-white gradient-btn shadow-lg shadow-[var(--glow-color)] hover:scale-105 transition-all flex items-center gap-3 cursor-pointer text-base border border-white/10"
            >
              <svg class="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"/>
              </svg>
              <span>Download Resume PDF</span>
            </a>
          </div>

          <p class="text-xs text-[var(--text-muted)] font-mono">
            * Note: If the PDF path is not uploaded yet, place your resume PDF file in <code class="text-[var(--primary)] font-bold">src/assets/Aniket_Agale_Resume.pdf</code>
          </p>

        </div>
      </div>
    </section>
  `
})
export class ResumeCtaComponent {
  @Input({ required: true }) personal!: PersonalDetails;
}
