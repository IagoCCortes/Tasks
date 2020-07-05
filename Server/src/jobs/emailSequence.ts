import { Container } from 'typedi';
import MailerService from '../services/mailer';
import winston from 'winston';

export default class EmailSequenceJob {
  public async handler(job, done): Promise<void> {
    const Logger = Container.get('logger') as winston.Logger;
    try {
      Logger.debug('✌️ Email Sequence Job triggered!');
      const { email, name }: { [key: string]: string } = job.attrs.data;
      const mailerServiceInstance = Container.get(MailerService);
      // await mailerServiceInstance.SendWelcomeEmail(email);
      done();
    } catch (e) {
      Logger.error('🔥 Error with Email Sequence Job: %o', e);
      done(e);
    }
  }
}
