import { Component, Input, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProjectItem } from '../../portfolio.data';

@Component({
  selector: 'app-portfolio-projects',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="projects" class="pt-6 pb-14 md:pt-8 md:pb-18 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
      <div class="absolute top-1/3 right-0 w-96 h-96 bg-[var(--secondary)] opacity-10 rounded-full blur-[140px] pointer-events-none"></div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        <div class="text-center mb-16 space-y-4" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            Featured Projects
          </h2>
          <p class="text-[var(--text-secondary)] max-w-xl mx-auto text-base sm:text-lg">
            A selection of projects that showcase my skills across the full stack.
          </p>
        </div>

        <div class="flex flex-wrap items-center justify-center gap-3 mb-12">
          @for (cat of filterCategories; track cat) {
            <button
              (click)="selectedCategory.set(cat)"
              [class.gradient-btn]="selectedCategory() === cat"
              [class.text-white]="selectedCategory() === cat"
              [class.shadow-lg]="selectedCategory() === cat"
              [class.shadow-[var(--glow-color)]]="selectedCategory() === cat"
              [class.bg-[var(--bg-secondary)]]="selectedCategory() !== cat"
              [class.text-[var(--text-muted)]]="selectedCategory() !== cat"
              [class.border-[var(--border-color)]]="selectedCategory() !== cat"
              class="px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold border transition-all cursor-pointer hover:text-[var(--text-primary)] hover:border-[var(--border-active)]"
            >
              {{ cat }}
            </button>
          }
        </div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-6">
          @for (proj of filteredProjects(); track proj.id; let i = $index) {
            <div data-aos="fade-up" [attr.data-aos-delay]="i * 100" class="p-6 rounded-2xl bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:shadow-lg hover:shadow-[var(--primary)]/30 hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between space-y-6 group">
              
              <div class="space-y-4">
                <div class="flex items-center justify-between">
                  <div class="w-12 h-12 rounded-xl bg-[var(--bg-surface)] border border-[var(--border-active)] flex items-center justify-center text-[var(--primary)] group-hover:bg-[var(--primary)] group-hover:text-white transition-all duration-300">
                    <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.8" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
                    </svg>
                  </div>
                  <span class="px-3 py-1 rounded-full text-[10px] font-mono font-bold uppercase tracking-wider bg-[var(--bg-secondary)] text-[var(--primary)] border border-[var(--border-color)]">
                    {{ proj.category }}
                  </span>
                </div>

                <div>
                  <h3 class="text-lg font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] transition-colors">
                    {{ proj.title }}
                  </h3>
                  @if (proj.subtitle) {
                    <h4 class="text-xs font-semibold text-[var(--primary)] mt-1 tracking-wide">
                      {{ proj.subtitle }}
                    </h4>
                  }
                  <p class="text-xs text-[var(--text-muted)] pt-2 leading-relaxed">
                    {{ proj.description }}
                  </p>
                  @if (proj.responsibilities && proj.responsibilities.length > 0) {
                    <div class="pt-3 border-t border-[var(--border-color)]">
                      <div class="expand-container" [class.expanded]="isExpanded(proj.id)">
                        <ul class="space-y-2 text-xs text-[var(--text-secondary)] pb-2 bg-[var(--bg-secondary)] p-4 rounded-xl border border-[var(--border-color)]">
                          <h4 class="font-bold text-[var(--text-primary)] mb-2 uppercase tracking-wide">Key Contributions</h4>
                          @for (resp of proj.responsibilities; track resp) {
                            <li class="flex items-start gap-2">
                              <span class="text-[var(--primary)] mt-0.5">•</span>
                              <span class="leading-relaxed">{{ resp }}</span>
                            </li>
                          }
                        </ul>
                      </div>
                    </div>
                  }
                </div>

                <div class="flex flex-wrap gap-1.5 pt-2 border-t border-[var(--border-color)]">
                  @for (tag of proj.tags; track tag) {
                    <span class="px-3 py-1 text-xs font-mono font-bold rounded-lg bg-[var(--bg-secondary)] text-[var(--primary)] border border-[var(--border-color)] shadow-sm">
                      #{{ tag }}
                    </span>
                  }
                </div>

              </div>

              <div class="pt-4 border-t border-[var(--border-color)]">
                <button (click)="toggleExpand(proj.id)" class="w-full text-center py-2 rounded-lg bg-[var(--primary)]/10 text-[var(--primary)] hover:bg-[var(--primary)] hover:text-white text-sm font-bold transition-colors shadow-sm">
                  {{ isExpanded(proj.id) ? 'Hide Details' : 'View Details' }}
                </button>
              </div>

            </div>
          }
        </div>

      </div>
    </section>
  `,
  styles: [`
    .expand-container {
      max-height: 0;
      opacity: 0;
      margin-top: 0;
      overflow: hidden;
      transition: max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s cubic-bezier(0.4, 0, 0.2, 1), margin-top 0.6s cubic-bezier(0.4, 0, 0.2, 1);
    }
    .expand-container.expanded {
      max-height: 600px;
      opacity: 1;
      margin-top: 12px;
    }
  `]
})
export class ProjectsComponent {
  @Input({ required: true }) projects!: ProjectItem[];

  filterCategories = ['All Projects', 'Angular', 'Angular & NodeJs'];
  selectedCategory = signal<string>('All Projects');
  expandedProjects = signal<Set<string>>(new Set());

  filteredProjects() {
    const cat = this.selectedCategory();
    if (cat === 'All Projects') {
      return this.projects;
    }
    return this.projects.filter(p => p.category === cat);
  }

  toggleExpand(id: string) {
    this.expandedProjects.update(set => {
      const newSet = new Set(set);
      if (newSet.has(id)) {
        newSet.delete(id);
      } else {
        newSet.add(id);
      }
      return newSet;
    });
  }

  isExpanded(id: string) {
    return this.expandedProjects().has(id);
  }
}
