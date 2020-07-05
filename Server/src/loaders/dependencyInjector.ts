import { Container } from 'typedi';
import LoggerInstance from './logger';
import agendaFactory from './agenda';
import config from '../config';
import sgMail from '@sendgrid/mail';

export default ({ mongoConnection, models }: { mongoConnection; models: { name: string; model: any }[] }) => {
  try {
    models.forEach((m) => {
      Container.set(m.name, m.model);
    });

    sgMail.setApiKey(config.emails.apiKey);

    const agendaInstance = agendaFactory({ mongoConnection });

    Container.set('agendaInstance', agendaInstance);
    Container.set('logger', LoggerInstance);
    Container.set('emailClient', sgMail);

    LoggerInstance.info('✌️ Agenda injected into container');

    return { agenda: agendaInstance };
  } catch (e) {
    LoggerInstance.error('🔥 Error on dependency injector loader: %o', e);
    throw e;
  }
};
