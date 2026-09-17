import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ChatService, ChatMessage } from '../../services/chat.service';
import { PORTFOLIO_DATA } from '../../portfolio.data';

@Component({
  selector: 'app-chat-widget',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './chat-widget.component.html',
  styleUrls: ['./chat-widget.component.css']
})
export class ChatWidgetComponent implements OnInit {
  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;

  isOpen = false;
  messages: ChatMessage[] = [];
  newMessage = '';
  isTyping = false;
  
  quickReplies = [
    'What are your skills?',
    'Show me your projects',
    'What is your experience?'
  ];

  portfolioName = PORTFOLIO_DATA.personal.name.split(' ')[0];

  constructor(private chatService: ChatService) {}

  ngOnInit() {
    this.messages.push(this.chatService.getInitialMessage());
  }

  toggleChat() {
    this.isOpen = !this.isOpen;
    if (this.isOpen) {
      setTimeout(() => this.scrollToBottom(), 100);
    }
  }

  sendMessage(text: string = this.newMessage) {
    if (!text.trim()) return;

    const userText = text.trim();

    this.messages.push({
      text: userText,
      sender: 'user',
      timestamp: new Date()
    });
    
    this.newMessage = '';
    this.isTyping = true;
    this.scrollToBottom();

    this.chatService.getReply(userText).subscribe(reply => {
      this.isTyping = false;
      this.messages.push({
        text: reply,
        sender: 'bot',
        timestamp: new Date()
      });
      this.scrollToBottom();
    });
  }

  scrollToBottom(): void {
    setTimeout(() => {
      try {
        this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
      } catch(err) { }
    }, 50);
  }
}
