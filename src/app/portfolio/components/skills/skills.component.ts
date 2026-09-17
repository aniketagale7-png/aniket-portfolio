import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

export interface DisplaySkill {
  name: string;
  level: number;
}

@Component({
  selector: 'app-portfolio-skills',
  standalone: true,
  imports: [CommonModule],
  template: `
    <section id="skills" class="pt-6 pb-14 md:pt-8 md:pb-18 bg-[var(--bg-primary)] text-[var(--text-primary)] relative overflow-hidden">
      <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[var(--primary)] opacity-10 blur-[150px] pointer-events-none rounded-full"></div>

      <div class="max-w-6xl mx-auto px-6 sm:px-12 lg:px-16 relative z-10">
        
        <div class="text-center max-w-3xl mx-auto mb-10 space-y-4" data-aos="fade-up">
          <h2 class="text-3xl font-extrabold tracking-tight text-[var(--primary)]">
            My Skills
          </h2>
          <p class="text-[var(--text-secondary)] text-base sm:text-lg">
            Technologies, frameworks, databases, and core development capabilities from my real-world experience.
          </p>
        </div>

        <div class="bg-[var(--bg-card)] border border-[var(--border-color)] hover:border-[var(--primary)] hover:-translate-y-1 rounded-3xl p-6 sm:p-12 hover:shadow-lg hover:shadow-[var(--primary)]/30 transition-all duration-500" data-aos="fade-up" data-aos-delay="200">
          
          <div class="mb-8 border-b border-[var(--border-color)] pb-4 flex items-center justify-between">
            <h3 class="text-xs sm:text-sm font-mono font-extrabold tracking-widest text-[var(--primary)] uppercase">
              PROFICIENCY LEVELS
            </h3>
            <span class="text-xs font-mono text-[var(--text-muted)] font-semibold">
              Frontend & Core Tech Stack
            </span>
          </div>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-8 mt-6">
            @for (skill of displaySkills; track skill.name; let i = $index) {
              <div class="group relative cursor-pointer py-2 transition-all duration-300">
                
                <div class="flex items-center justify-between mb-2.5">
                  <span class="text-[15px] font-bold text-[var(--text-primary)] group-hover:text-[var(--primary)] group-hover:translate-x-1 transition-all duration-300">
                    {{ skill.name }}
                  </span>
                  <span class="font-mono text-xs sm:text-sm font-bold text-[var(--text-muted)] group-hover:text-[var(--primary)] transition-colors duration-300">
                    {{ skill.level }}%
                  </span>
                </div>

                <div class="w-full h-1.5 rounded-full bg-gray-100 dark:bg-gray-800 overflow-hidden relative">
                  <div
                    class="h-full rounded-full transition-all duration-1000 ease-out group-hover:shadow-[0_0_10px_rgba(var(--primary-rgb),0.5)] group-hover:brightness-110"
                    [style.width.%]="skill.level"
                    [ngClass]="getGradient(i)"
                  ></div>
                </div>

              </div>
            }
          </div>

        </div>

      </div>
    </section>
  `,
  styles: [`
    @keyframes shimmer {
      100% {
        transform: translateX(400%) skewX(-12deg);
      }
    }
    .animate-shimmer {
      animation: shimmer 1.5s infinite;
    }
  `]
})
export class SkillsComponent {
  @Input() set skills(inputSkills: any[]) {
    const excludedNames = [
      'sql',
      'rest api integration',
      'problem solving & bug fixing',
      'teamwork & adaptability',
      'rest api & steppers'
    ];

    if (inputSkills && inputSkills.length > 0) {
      const filtered = inputSkills
        .filter(s => s && s.name && !excludedNames.includes(s.name.toLowerCase()))
        .map(s => ({ name: s.name, level: s.level }));
      
      if (filtered.length > 0) {
        this.displaySkills = filtered;
      }
    }
  }

  displaySkills: DisplaySkill[] = [
    { name: 'Angular', level: 95 },
    { name: 'React', level: 80 },
    { name: 'Python', level: 80 },
    { name: 'TypeScript', level: 88 },
    { name: 'JavaScript', level: 80 },
    { name: 'Node.js', level: 80 },
    { name: 'RxJS', level: 95 },
    { name: 'SCSS', level: 95 },
    { name: 'Tailwind CSS', level: 95 },
    { name: 'React', level: 70 },
    { name: 'MySQL', level: 70 },
    { name: 'NestJS', level: 50 }
  ];

  getGradient(index: number): string {
    const gradients = [
      'bg-gradient-to-r from-purple-600 via-pink-500 to-cyan-400',
      'bg-gradient-to-r from-sky-500 to-cyan-400',
      'bg-gradient-to-r from-blue-500 to-cyan-400',
      'bg-gradient-to-r from-emerald-500 to-teal-400',
      'bg-gradient-to-r from-purple-500 via-pink-500 to-cyan-400',
      'bg-gradient-to-r from-pink-500 to-purple-400',
      'bg-gradient-to-r from-cyan-400 to-teal-400',
      'bg-gradient-to-r from-cyan-400 to-blue-500',
      'bg-gradient-to-r from-emerald-600 to-teal-400',
      'bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500'
    ];
    return gradients[index % gradients.length];
  }
}
