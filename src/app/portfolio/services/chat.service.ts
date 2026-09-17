import { Injectable } from '@angular/core';
import { Observable, of, delay } from 'rxjs';
import { PORTFOLIO_DATA } from '../portfolio.data';

export interface ChatMessage {
  text: string;
  sender: 'user' | 'bot';
  timestamp: Date;
}

@Injectable({
  providedIn: 'root'
})
export class ChatService {
  private data = PORTFOLIO_DATA;

  constructor() {}

  getInitialMessage(): ChatMessage {
    return {
      text: `Hi there! 👋 I am ${this.data.personal.name.split(' ')[0]}'s AI Portfolio Assistant. Ask me anything about his skills, project portfolio, experience, or availability!`,
      sender: 'bot',
      timestamp: new Date()
    };
  }

  getReply(userMessage: string): Observable<string> {
    const msg = userMessage.toLowerCase();
    let reply = "I'm an AI assistant. I can tell you all about Aniket's skills, projects, experience, or this website. Feel free to ask!";

    if (msg.includes('hello') || msg.includes('hi') || msg.includes('hey')) {
      reply = `Hello! How can I help you learn more about ${this.data.personal.name}?`;
    } 
    else if (msg.includes('name') || msg.includes('who are you')) {
      reply = `I am an AI assistant representing ${this.data.personal.name}, a ${this.data.personal.title}.`;
    }
    else if (msg.includes('skill') || msg.includes('technolog') || msg.includes('know')) {
      const topSkills = this.data.skills.filter(s => s.category === 'Frontend').map(s => s.name).join(', ');
      reply = `${this.data.personal.name.split(' ')[0]} specializes in Frontend Development. His core skills include ${topSkills}, and many more.`;
    }
    else if (msg.includes('project') || msg.includes('work') || msg.includes('portfolio')) {
      const projectNames = this.data.projects.map(p => p.title).join(', ');
      reply = `He has worked on several amazing projects including: ${projectNames}. You can check them out in the Projects section!`;
    }
    else if (msg.includes('experience') || msg.includes('job') || msg.includes('company')) {
      const currentJob = this.data.experiences.find(e => e.isCurrent);
      if (currentJob) {
        reply = `Currently, he is working as a ${currentJob.role} at ${currentJob.company}. He has ${this.data.personal.yearsOfExperience} years of overall experience.`;
      } else {
        reply = `He has ${this.data.personal.yearsOfExperience} years of experience in software development.`;
      }
    }
    else if (msg.includes('contact') || msg.includes('hire') || msg.includes('email') || msg.includes('phone')) {
      reply = `You can reach out to him via email at ${this.data.personal.email} or call at ${this.data.personal.phone}.`;
    }
    else if (msg.includes('education') || msg.includes('degree') || msg.includes('study')) {
      reply = `He holds a ${this.data.education[0].degree} from ${this.data.education[0].institution}.`;
    }
    else if (msg.includes('website') || msg.includes('site') || msg.includes('build') || msg.includes('built')) {
      reply = `This website is a personal portfolio built with Angular! It features my custom UI designs, animations, and highlights my professional journey.`;
    }

    return of(reply).pipe(delay(200));
  }
}
