import { Injectable } from '@angular/core';
import emailjs from '@emailjs/browser';
import { PORTFOLIO_DATA } from '../portfolio.data';

@Injectable({
  providedIn: 'root'
})
export class EmailService {
  
  private readonly SERVICE_ID = 'service_qssd10s';
  private readonly TEMPLATE_ID = 'template_zmz4phd';
  private readonly PUBLIC_KEY = '49MUmia886RATc7aV';

  constructor() {}

  async sendEmail(message: string, fromName: string = 'Portfolio Visitor', fromEmail: string = 'Visitor', subject: string = 'Portfolio Message', phone: string = ''): Promise<boolean> {
    try {
      const formattedMessage = `
Name: ${fromName}
Email: ${fromEmail}
Phone: ${phone}
Subject: ${subject}

Message:
${message}
      `;

      const templateParams = {
        name: fromName,
        email: fromEmail,
        phone: phone,
        subject: subject,
        message: formattedMessage
      };

      const response = await emailjs.send(
        this.SERVICE_ID,
        this.TEMPLATE_ID,
        templateParams,
        this.PUBLIC_KEY
      );

      console.log('SUCCESS!', response.status, response.text);
      return true;
    } catch (err) {
      console.error('FAILED...', err);
      return false;
    }
  }
}
