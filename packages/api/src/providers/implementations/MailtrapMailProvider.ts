import { IMailProvider, IMessage } from './../IMailProvider';
import nodemailer from 'nodemailer';
import SMTPTransport from 'nodemailer/lib/smtp-transport';
import Mail from 'nodemailer/lib/mailer';
import dotenv from 'dotenv';

dotenv.config();

export class MailtrapMailProvider implements IMailProvider {
  opts: SMTPTransport.Options = {
    host: process.env.MAIL_HOST,
    port: Number(process.env.MAIL_PORT),
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  };

  private transporter: Mail;
  constructor() {
    this.transporter = nodemailer.createTransport(this.opts);
  }

  async sendMail(message: IMessage) {
    await this.transporter.sendMail({
      to: {
        name: message.to.name,
        address: message.to.email,
      },
      from: {
        name: message.from.name,
        address: message.from.email,
      },
      subject: message.subject,
      html: message.body,
    });
  }
}
