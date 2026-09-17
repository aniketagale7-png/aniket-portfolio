import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PersonalDetails } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-about',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="about" class="pt-6 pb-14 md:pt-8 md:pb-18 bg-[var(--bg-primary)] relative backdrop-blur-md text-[var(--text-primary)]">
      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-4" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            About Me
          </h2>
          <p class="text-[var(--text-secondary)] text-base sm:text-lg">
            Frontend Developer focused on Angular component architecture, REST API integration, and user-centric web applications.
          </p>
        </div>

        <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div class="lg:col-span-7 space-y-6" data-aos="fade-right" data-aos-delay="100">
            <h3 class="text-2xl font-extrabold text-[var(--text-primary)] flex items-center gap-3">
              <span class="w-9 h-9 rounded-xl gradient-btn text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">01</span>
              <span>Professional Journey & Focus</span>
            </h3>

            @for (paragraph of personal.fullBio; track $index) {
              <p class="text-[var(--text-secondary)] leading-relaxed text-base">
                {{ paragraph }}
              </p>
            }

            <div class="pt-4 space-y-3">
              <h4 class="text-xs font-bold uppercase tracking-wider text-[var(--primary)] font-mono">Core Competencies:</h4>
              <div class="flex flex-wrap gap-2.5">
                <span class="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-active)] text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  Angular UI & Component Architecture
                </span>
                <span class="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-active)] text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  Multi-Step Stepper Workflows
                </span>
                <span class="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-active)] text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  RESTful API Integration
                </span>
                <span class="px-3.5 py-2 rounded-xl bg-[var(--bg-card)] text-[var(--text-primary)] border border-[var(--border-active)] text-xs font-bold flex items-center gap-2 shadow-sm">
                  <svg class="w-4 h-4 text-[var(--primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M5 13l4 4L19 7"/>
                  </svg>
                  Bug Fixing & Usability Testing
                </span>
              </div>
            </div>
          </div>

          <div class="lg:col-span-5 grid grid-cols-2 gap-4">
            
            <div data-aos="fade-up" data-aos-delay="100" class="relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)]/50 hover:shadow-xl hover:shadow-[var(--primary)]/15 transition-all duration-500 overflow-hidden group flex flex-col items-start text-left cursor-default hover:-translate-y-1">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-[var(--primary)] rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div class="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-[var(--primary)] mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/></svg>
              </div>

              <div class="relative z-10">
                <div class="text-4xl font-black bg-gradient-to-br from-[var(--primary)] to-cyan-400 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  {{ personal.yearsOfExperience }}+
                </div>
                <div class="text-[15px] font-bold text-[var(--text-primary)] mb-1">Frontend Exp</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="200" class="relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-purple-500/50 hover:shadow-xl hover:shadow-purple-500/15 transition-all duration-500 overflow-hidden group flex flex-col items-start text-left cursor-default hover:-translate-y-1">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-purple-500 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div class="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-purple-500 mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"/></svg>
              </div>

              <div class="relative z-10">
                <div class="text-4xl font-black bg-gradient-to-br from-purple-500 to-pink-500 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  {{ personal.completedProjects }}+
                </div>
                <div class="text-[15px] font-bold text-[var(--text-primary)] mb-1">Client Projects</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="300" class="relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-emerald-500/50 hover:shadow-xl hover:shadow-emerald-500/15 transition-all duration-500 overflow-hidden group flex flex-col items-start text-left cursor-default hover:-translate-y-1">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-emerald-500 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div class="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-emerald-500 mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"/></svg>
              </div>

              <div class="relative z-10">
                <div class="text-4xl font-black bg-gradient-to-br from-emerald-500 to-teal-400 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  100%
                </div>
                <div class="text-[15px] font-bold text-[var(--text-primary)] mb-1">Responsive UI</div>
              </div>
            </div>

            <div data-aos="fade-up" data-aos-delay="400" class="relative p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-blue-500/50 hover:shadow-xl hover:shadow-blue-500/15 transition-all duration-500 overflow-hidden group flex flex-col items-start text-left cursor-default hover:-translate-y-1">
              <div class="absolute -top-10 -right-10 w-28 h-28 bg-blue-500 rounded-full blur-[40px] opacity-10 group-hover:opacity-30 transition-opacity duration-700 pointer-events-none"></div>
              
              <div class="w-12 h-12 rounded-xl bg-[var(--bg-primary)] border border-[var(--border-color)] flex items-center justify-center text-blue-500 mb-5 group-hover:scale-110 transition-transform duration-500 shadow-sm relative z-10">
                 <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l9-5-9-5-9 5 9 5z"/><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"/></svg>
              </div>

              <div class="relative z-10">
                <div class="text-4xl font-black bg-gradient-to-br from-blue-500 to-indigo-500 bg-clip-text text-transparent mb-1 drop-shadow-sm">
                  BCA
                </div>
                <div class="text-[15px] font-bold text-[var(--text-primary)] mb-1">Mysore University</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  `
})
export class AboutComponent {
  @Input({ required: true }) personal!: PersonalDetails;
}
